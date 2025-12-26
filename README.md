# Student Speaking Assessment Report

This is a simple full stack web application built using React for the frontend and Node.js with Express for the backend.
The project displays a student's speaking test scores similar to SpeechAce or IELTS reports. It shows the overall score, skill‑wise results, a visual chart, and descriptive feedback generated automatically based on score ranges.

---

## How to run the project

1. Open a terminal in the project folder.

2. Setup and run the backend:

cd backend
npm install
npm start


This starts the Express server on http://localhost:4000  
The API has a single endpoint `/api/report` that returns one student record.

3. Setup and run the frontend:


cd frontend
npm install
npm run dev




This starts the React app on http://localhost:5173  
The frontend automatically fetches data from the backend and displays the report.

Keep both servers running while using the project.

---

## Where the scores are stored

All score data is defined in the file:




Example structure:

const studentReport = {
studentId: "SPEAK-001",
name: "John Doe",
overallScore: 7.2,
maxScore: 9,
scores: {
pronunciation: 7.8,
fluency: 6.7,
vocabulary: 6.2,
grammar: 6.4
}
};




The frontend fetches this data from the API  
(GET http://localhost:4000/api/report) and displays:

- Overall score at the top  
- Skill‑wise progress bars and chart  
- Descriptive feedback section that updates automatically

---

## How the feedback logic works

Feedback generation follows the IELTS-style band description method.  
It is implemented inside `frontend/src/components/FeedbackSection.jsx`.

Each skill and the overall score are checked through simple conditions:





The frontend fetches this data from the API  
(GET http://localhost:4000/api/report) and displays:

- Overall score at the top  
- Skill‑wise progress bars and chart  
- Descriptive feedback section that updates automatically

---

## How the feedback logic works

Feedback generation follows the IELTS-style band description method.  
It is implemented inside `frontend/src/components/FeedbackSection.jsx`.

Each skill and the overall score are checked through simple conditions:


if (score >= 8)
return "Excellent performance with strong control.";
else if (score >= 6)
return "Good performance with minor inaccuracies.";
else
return "Needs improvement.";



When the numeric scores are changed in the backend JSON object,  
the descriptive feedback on the page updates automatically.

Example results:

Score 8.2  →  Excellent performance with strong control  
Score 6.5  →  Good performance with minor inaccuracies  
Score 5.0  →  Needs improvement

---

Summary:
- Simple front end and back end connected by API  
- One student record, no login or database required  
- Automatically generated feedback messages  
- Technologies used: React (Vite), Express, Chart.js, plain CSS

This project was created for the Full Stack Development assignment: Student Assessment Report Page.



