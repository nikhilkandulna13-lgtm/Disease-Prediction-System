import sys
import json
import pickle
import pandas as pd
import os

base = os.path.dirname(__file__)

diabetes_model = pickle.load(open(os.path.join(base, 'diabetes.pkl'), 'rb'))
heart_model = pickle.load(open(os.path.join(base, 'heart.pkl'), 'rb'))

try:
    input_data = json.loads(sys.argv[1])

    age = input_data['age']
    bmi = input_data['bmi']
    whr = input_data['whr']
    glucose = input_data['glucose']
    cholesterol = input_data.get('cholesterol')
    bp = input_data.get('bp')

    if cholesterol is None:
        cholesterol = 170

    if bp is None:
        bp = 110

    # =========================
    # Predictions
    # =========================

    d_features = pd.DataFrame([[age, bmi, whr, glucose]],
                              columns=['Age', 'BMI', 'WHR', 'Glucose'])

    d_pred = diabetes_model.predict(d_features)[0]

    h_features = pd.DataFrame([[age, bmi, whr, cholesterol, bp]],
                              columns=['Age', 'BMI', 'WHR', 'Cholesterol', 'BP'])

    h_pred = heart_model.predict(h_features)[0]

    # =========================
    # Override Rules
    # =========================

    if glucose >= 140:
        d_pred = 1

    if bp >= 140 or cholesterol >= 240:
        h_pred = 1

    # =========================
    # DXA / VAT Inspired Logic
    # =========================

    vat_score = 0

    if bmi > 30:
        vat_score += 1

    if whr > 0.9:
        vat_score += 1

    if cholesterol >= 240:
        vat_score += 1

    if bp >= 140:
        vat_score += 1

    # Final VAT Risk
    if vat_score >= 2:
        visceral_risk = "High"
    else:
        visceral_risk = "Normal"

    # VAT enhancement
    if visceral_risk == "High":
        h_pred = 1
        d_pred = 1

    # =========================
    # Disease Mapping
    # =========================

    diseases = []

    if h_pred == 1:
        diseases += [
            "Heart Attack Risk",
            "Stroke Risk",
            "Hypertension"
        ]

    if d_pred == 1:
        diseases += [
            "Type 2 Diabetes",
            "Kidney Disease"
        ]

    if visceral_risk == "High":
        diseases += [
            "Obesity",
            "Fatty Liver Disease",
            "Metabolic Syndrome",
            "Insulin Resistance"
        ]

    if len(diseases) == 0:
        diseases.append("Low overall health risk")

    # =========================
    # Suggestion
    # =========================

    if visceral_risk == "High":
        suggestion = "Reduce abdominal fat, exercise regularly"
    else:
        suggestion = "Maintain healthy lifestyle"

    # =========================
    # Final Result
    # =========================

    result = {
        "diabetes_risk": "High" if d_pred == 1 else "Low",
        "heart_risk": "High" if h_pred == 1 else "Low",
        "visceral_risk": visceral_risk,
        "diseases": diseases,
        "suggestion": suggestion
    }

    print(json.dumps(result))

except Exception as e:
    print(json.dumps({"error": str(e)}))