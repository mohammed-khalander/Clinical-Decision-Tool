from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd
from pymongo import MongoClient
import os

# ----------------- Load Model + Scaler -----------------
model = joblib.load("heart_model.pkl")
scaler = joblib.load("scaler.pkl")

# ----------------- Connect MongoDB ---------------------
client = MongoClient("mongodb+srv://mini-project:mini-project@cluster0.owzgcap.mongodb.net/CDT?appName=Cluster0")
db = client["CDT"]
patients = db["PatientDetails"]

# ----------------- API Server --------------------------
app = FastAPI()

class PatientInput(BaseModel):
    age: int
    sex: int
    cp: int
    trestbps: int
    chol: int
    fbs: int
    restecg: int
    thalach: int
    exang: int
    oldpeak: float
    slope: int
    ca: int
    thal: int

@app.get("/")
def home():
    return {"Success":True,"message":"CDT Python Server is Up and Running"}


@app.post("/predict")
def predict(data: PatientInput):
    # Convert JSON → DataFrame
    print("Patient Data From Express",data,"\n")
    print("Patient Data From Express",data.dict(),"\n")
    df_input = pd.DataFrame([data.dict()])
    print("Patient input in DataFrame",df_input,"\n")
    # Scale
    df_scaled = scaler.transform(df_input)
    print("Patient input ::: Scaled one",df_scaled,"\n")

    # Predict
    pred = int(model.predict(df_scaled)[0])
    prob = float(model.predict_proba(df_scaled)[0][1])

    print("Patient Prediction ", pred,prob,"\n")


    # Store in MongoDB
    record = data.dict()
    record["disease_prediction"] = int(pred)
    record["prediction_probability"] = float(prob)
    # record["ai_explanation"] = None  # will update after Gemini

    print("The final Record",record,"\n")

    patients.insert_one(record)

    # return {
    #     "prediction": "Heart Disease Likely" if pred == 1 else "No Heart Disease Detected",
    #     "probability": prob
    # }
    return {
        "prediction": pred,
        "probability": prob
    }


# uvicorn main:app --reload --port 5000
