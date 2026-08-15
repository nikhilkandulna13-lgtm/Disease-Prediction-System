import pandas as pd
from sklearn.naive_bayes import GaussianNB
import pickle
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# =========================
# LOAD DATASETS
# =========================

bodyfat = pd.read_csv('../server/dataset/bodyfat.csv')
diabetes = pd.read_csv('../server/dataset/diabetes.csv')
heart = pd.read_csv('../server/dataset/heart.csv')

# =========================
# BODYFAT PROCESSING
# =========================

bodyfat.rename(columns={
    'Abdomen': 'waist',
    'Hip': 'hip'
}, inplace=True)

bodyfat['WHR'] = bodyfat['waist'] / bodyfat['hip']
bodyfat['BMI'] = bodyfat['Weight'] / ((bodyfat['Height'] / 100) ** 2)

bodyfat = bodyfat[['Age', 'BMI', 'WHR']]

# =========================
# DIABETES MODEL
# =========================

diabetes.rename(columns={'Outcome': 'Risk'}, inplace=True)

diabetes = diabetes[['Age', 'BMI', 'Glucose', 'Risk']]

# Add WHR
bf_sample = bodyfat.sample(n=len(diabetes), replace=True)
diabetes['WHR'] = bf_sample['WHR'].values

X_d = diabetes[['Age', 'BMI', 'WHR', 'Glucose']]
y_d = diabetes['Risk']

X_train_d, X_test_d, y_train_d, y_test_d = train_test_split(
    X_d, y_d, test_size=0.2, random_state=42
)

model_diabetes = GaussianNB()

model_diabetes.fit(X_train_d, y_train_d)

y_pred_d = model_diabetes.predict(X_test_d)

accuracy_d = accuracy_score(y_test_d, y_pred_d)

print("Diabetes Model Accuracy:", accuracy_d)


pickle.dump(model_diabetes, open('diabetes.pkl', 'wb'))

# =========================
# HEART MODEL
# =========================

# Rename target column (num → Risk)
heart.rename(columns={'num': 'Risk'}, inplace=True)

# Convert multi-class to binary
heart['Risk'] = heart['Risk'].apply(lambda x: 1 if x > 0 else 0)

# Select required columns
heart = heart[['age', 'trestbps', 'chol', 'Risk']]

# Rename columns for consistency
heart.rename(columns={
    'age': 'Age',
    'trestbps': 'BP',
    'chol': 'Cholesterol'
}, inplace=True)

# Add BMI & WHR from bodyfat
bf_sample2 = bodyfat.sample(n=len(heart), replace=True)
heart['BMI'] = bf_sample2['BMI'].values
heart['WHR'] = bf_sample2['WHR'].values
# Remove missing values (VERY IMPORTANT)
heart = heart.dropna()

# Features & target
X_h = heart[['Age', 'BMI', 'WHR', 'Cholesterol', 'BP']]
y_h = heart['Risk']

# Train model
X_train_h, X_test_h, y_train_h, y_test_h = train_test_split(
    X_h, y_h, test_size=0.2, random_state=42
)

model_heart = GaussianNB()

model_heart.fit(X_train_h, y_train_h)

y_pred_h = model_heart.predict(X_test_h)

accuracy_h = accuracy_score(y_test_h, y_pred_h)

print("Heart Model Accuracy:", accuracy_h)

# Save model
pickle.dump(model_heart, open('heart.pkl', 'wb'))

print("Both models trained successfully ✅")
