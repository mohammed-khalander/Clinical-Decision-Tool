<div align="center">

  <img src="logo.png" alt="Clinical Decision Tool Logo" width="128">
  
# Clinical Decision Tool
### *Predictive Insights, Proactive Care.*

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](#)
[![Vite](https://img.shields.io/badge/Vite-6.3-646CFF?logo=vite&logoColor=white)](#)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)](#)
[![Python](https://img.shields.io/badge/Python-FastAPI-3776AB?logo=python&logoColor=white)](#)
[![Machine Learning](https://img.shields.io/badge/Machine_Learning-Scikit_Learn-F7931E?logo=scikit-learn&logoColor=white)](#)
[![Gemini API](https://img.shields.io/badge/AI-Google_Gemini-4285F4?logo=google&logoColor=white)](#)
[![MongoDB](https://img.shields.io/badge/MongoDB-Mongoose-47A248?logo=mongodb&logoColor=white)](#)

</div>

---

## Overview

**Clinical Decision Tool** is a comprehensive, AI-powered healthcare ecosystem designed to assist medical professionals and patients. Bridging the gap between advanced machine learning and daily clinical workflows, Clinical Decision Tool not only predicts the likelihood of heart disease with high accuracy but also seamlessly connects patients with doctors through a fully integrated appointment booking system.

By combining predictive analytics, explainable AI, and a robust medical routing platform, Clinical Decision Tool represents the next generation of clinical decision support.

---

## Key Features & Technology Stack

Clinical Decision Tool is built using a modern, scalable microservices architecture. Here is how our key features map directly to the technologies driving them:

### Predictive Heart Disease Analysis
* **Technology:** Python, scikit-learn, joblib, pandas
* **How it works:** Our trained ML model evaluates up to 13 critical clinical metrics (like resting blood pressure, cholesterol, and ST depression) to predict heart disease presence. The data pipeline is optimized with `pandas` and served efficiently using pre-trained `joblib` models.

### Lightning-Fast Clinical Microservice
* **Technology:** FastAPI, Python, Uvicorn
* **How it works:** The machine learning model is exposed via a high-performance REST API built with **FastAPI**. It handles complex data normalizations (via scalers) and provides millisecond-latency predictions back to the core server.

### Explainable AI Insights
* **Technology:** Google Gemini API (`@google/generative-ai`)
* **How it works:** A raw prediction isn't enough in healthcare. We leverage the capabilities of **Gemini AI** to transform statistical probabilities into human-readable clinical explanations, providing doctors and patients with actionable insights.

### Interactive Patient & Doctor Portal
* **Technology:** React 19, Vite, Tailwind CSS 4, DaisyUI
* **How it works:** A highly responsive, component-driven frontend experience. **React** and **Vite** provide a seamless Single Page Application (SPA), while **Tailwind CSS** and **DaisyUI** ensure a clean, accessible, and modern clinical user interface.

### Robust Core Server & Appointment Engine
* **Technology:** Node.js, Express.js, JWT, bcryptjs
* **How it works:** The central nervous system of the application. The **Express API** handles secure authentication (JWT/bcrypt), patient routing, and coordinates between the interactive client layer and the predictive Python microservice.

### Secure Clinical Data Management
* **Technology:** MongoDB, Mongoose ORM
* **How it works:** All patient schemas, medical records, predictive outcomes, and doctor appointment schedules are persistently stored in a highly scalable no-sql **MongoDB** environment.

### Seamless Payments & Media Management
* **Technology:** Razorpay API, Cloudinary, Nodemailer
* **How it works:** Patients can securely pay appointment fees via the **Razorpay** gateway. **Cloudinary** manages medical profile assets efficiently in the cloud, while **Nodemailer** ensures instantaneous email notifications for all bookings.

---

## System Architecture

The ecosystem is divided into three primary modules:

1. **`ML_Model` & `Python-Server`**: The Data Science domain. Contains all Jupyter notebooks used for Exploratory Data Analysis, Feature Selection, and Model Training, along with the **FastAPI** deployment script (`main.py`).
2. **`Clinical_Decision_Tool/SERVER`**: The Node.js Express Backend. Handles business logic, authentication, Gemini AI integration, DB interactions, and user endpoints.
3. **`Clinical_Decision_Tool/CLIENT`**: The React Vite Frontend. Provides role-based portals for Admin, Doctors, and Patients.

---

## Getting Started

Follow these steps to run the comprehensive platform locally.

### Prerequisites
* Node.js v18+
* Python 3.9+
* MongoDB URI
* Gemini API Key

### 1. Start the Machine Learning Microservice
Navigate to the Python server, install dependencies (if not globally available), and start the FastAPI uvicorn instance:
```bash
cd Python-Server
pip install fastapi pydantic joblib pandas pymongo uvicorn scikit-learn
uvicorn main:app --reload --port 5000
```
> The ML server will be listening for predictions at `http://localhost:5000`

### 2. Configure & Start the Core Node.js API
Open a new terminal, navigate to the Express server, configure your variables, and boot the application:
```bash
cd Clinical_Decision_Tool/SERVER
npm install
```
Setup your `.env` file inside `SERVER` with vital credentials:
```env
MONGODB_URI=your_mongodb_uri
PORT=4000
GEMINI_API_KEY=your_gemini_key
# Also include CLOUDINARY, JWT_SECRET, and RAZORPAY keys as necessary.
```
Then start the development server:
```bash
npm run dev
```

### 3. Launch the Client Portal
Open a third terminal, navigate to the React frontend, install packages, and launch:
```bash
cd Clinical_Decision_Tool/CLIENT
npm install
npm run dev
```
> Access the beautiful application frontend at `http://localhost:5173`

---

*Transforming data into diagnosis. Engineered for the future of healthcare.*
