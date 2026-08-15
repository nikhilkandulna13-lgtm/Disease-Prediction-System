# Disease Prediction System

An AI-powered healthcare platform that combines disease risk prediction, symptom analysis, and personalized health recommendations using Machine Learning.

## Project Overview

The AI Healthcare Risk Prediction System helps users assess potential health risks by analyzing health parameters and symptoms. The system uses machine learning models to predict the likelihood of diseases such as diabetes and heart disease, while also providing symptom-based disease suggestions and healthcare guidance.

This project was developed as an MCA academic project to demonstrate the integration of Machine Learning, Web Development, and Healthcare Analytics.

## ✨ Features

### Health Risk Prediction
- Predicts Diabetes Risk
- Predicts Heart Disease Risk
- Calculates Visceral Fat Risk
- Provides health suggestions based on prediction results
- Displays risk levels using color-coded indicators

### AI Symptom Analysis Assistant
- Interactive chatbot interface
- Collects symptoms through guided questions
- Identifies possible diseases based on symptoms
- Generates a chat summary report
- Export summary as PDF

### Supporting Health Utilities
- BMI Calculator
- Diet Plan Generator
- Calorie Calculator

##  Machine Learning Models

### Diabetes Prediction Model
- Algorithm: Gaussian Naive Bayes
- Features:
  - Age
  - BMI
  - WHR (Waist-Hip Ratio)
  - Glucose

### Heart Disease Prediction Model
- Algorithm: Gaussian Naive Bayes
- Features:
  - Age
  - BMI
  - WHR
  - Blood Pressure
  - Cholesterol

##  Model Performance

| Model | Accuracy |
|---------|---------|
| Diabetes Prediction | 73.38% |
| Heart Disease Prediction | 61.68% |

> Accuracy may vary depending on dataset distribution and train-test split.

##  Technologies Used

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js

### Machine Learning
- Python
- Scikit-learn
- Pandas
- NumPy
- Pickle

### Database
- MongoDB Atlas

## Project Structure

DISEASE-PREDICTION-SYSTEM/
│
├── frontend/
│   ├── src/
│   ├── package.json
│
├── server/
│   ├── routes/
│   ├── models/
│   ├── dataset/
│
├── ml/
│   ├── train_model.py
│   ├── predict.py
│   ├── diabetes.pkl
│   ├── heart.pkl
│
├── README.md
└── .gitignore

## Datasets

The datasets used in this project were obtained from Kaggle and publicly available healthcare datasets.

### Datasets Used
- Diabetes Dataset
- Heart Disease Dataset
- Body Fat Dataset

These datasets were preprocessed and integrated to generate additional health parameters such as BMI and WHR.

##  Installation

### 1. Clone Repository

```bash
git clone https://github.com/nikhilkandul13-lgtm/AI-Healthcare-Risk-Prediction-System.git
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

### 4. Install Python Dependencies

```bash
pip install pandas numpy scikit-learn
```

### 5. Start Backend

```bash
cd server
node app.js
```

### 6. Start Frontend

```bash
cd frontend
npm run dev
```

---

## Future Enhancements

- Deep Learning-based disease prediction
- More disease categories
- Hospital recommendation system
- User authentication and history tracking
- Real-time health monitoring integration
- Advanced medical report analysis


## Author

Nikhil Bhaskar Kandulna

Master of Computer Applications (MCA)  
BIT Mesra, Ranchi

## Disclaimer

This system is developed for educational and research purposes only. It is not intended to replace professional medical advice, diagnosis, or treatment. Always consult qualified healthcare professionals for medical concerns.