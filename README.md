# 🤖 Recruit AI
AI-Powered Smart Recruitment Platform

---

## 🚀 Overview

Recruit AI is an intelligent recruitment platform built using the MERN stack.
It streamlines the hiring process by automatically analyzing resumes,
matching candidates with job descriptions, and ranking them based on relevance.

The goal is to reduce manual screening time and improve hiring efficiency.

---

## ✨ Features

- Secure Authentication (JWT-based)
- Resume Upload (PDF)
- Resume Parsing & Skill Extraction
- Job Description Matching
- Candidate Scoring & Ranking
- Recruiter Dashboard
- Responsive UI

---

## 🛠️ Tech Stack

Frontend:
- React.js
- HTML5
- CSS3
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MongoDB

AI Logic:
- Keyword matching algorithm
- Skill extraction logic

---

## 📁 Project Structure

Recruit-AI/
│
├── client/              # React Frontend
├── server/              # Express Backend
├── models/              # MongoDB Schemas
├── routes/              # API Routes
├── controllers/         # Business Logic
├── utils/               # AI / Matching Logic
└── README.md

---

## ⚙️ Installation & Setup

1. Clone the repository

git clone https://github.com/your-username/recruit-ai.git
cd recruit-ai

2. Install Backend Dependencies

cd server
npm install

3. Install Frontend Dependencies

cd ../client
npm install

4. Setup Environment Variables

Create a .env file inside the server folder:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000

5. Run the Application

Start Backend:

cd server
npm start

Start Frontend:

cd client
npm start

Application URLs:

Frontend: http://localhost:3000
Backend:  http://localhost:5000

---

## 🧠 How AI Matching Works

1. Resume text is extracted from uploaded PDF.
2. Skills and keywords are identified.
3. Job description is analyzed.
4. Matching score is calculated based on:
   - Skill overlap
   - Keyword frequency
   - Relevant experience
5. Candidates are ranked based on score.

---

## 🔮 Future Enhancements

- OpenAI API integration for advanced analysis
- Admin panel
- Email notifications
- Cloud storage integration
- Machine learning-based ranking

---

## 👩‍💻 Author

J. Shree Manvitha Reddy
GitHub: https://github.com/Manvitha-486

---

## ⭐ Support

If you like this project, give it a star on GitHub!
