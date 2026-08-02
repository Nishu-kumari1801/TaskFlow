TaskFlow - Task Management Application

<p align="center"> <h3 align="center">A Simple & Efficient Task Management Application</h3> <p align="center"> Create, update, delete, and manage tasks with ease using Node.js, Express.js, MongoDB, and EJS. </p> </p>

<p align="center">

<img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/> 
<img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/> 
<img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white"/> 
<img src="https://img.shields.io/badge/EJS-B4CA65?style=for-the-badge&logo=ejs&logoColor=black"/> 
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white"/>

</p>

📖 About The Project

TaskFlow is a full-stack task management application that helps users organize their daily work efficiently. It provides a clean and intuitive interface to perform all essential task management operations.

The application supports complete CRUD functionality, allowing users to create new tasks, edit existing ones, delete individual tasks, and remove multiple selected tasks simultaneously. Task information is securely stored in MongoDB, while Express.js handles server-side logic and EJS renders dynamic pages for a seamless user experience.

This project demonstrates practical implementation of backend development concepts such as routing, server-side rendering, MongoDB integration, form handling, environment variables, and RESTful CRUD operations.

📌 Features
➕ Add new tasks
✏️ Update existing tasks
❌ Delete individual tasks
🗑️ Delete multiple selected tasks simultaneously
📋 View all tasks in one place
💾 Persistent data storage using MongoDB
⚡ Fast server-side rendering using EJS
🎯 Simple and user-friendly interface

📂 Project Structure
TaskFlow/
│
├── public/
│   └── style.css
│
├── views/
│   ├── add.ejs
│   ├── list.ejs
│   ├── navbar.ejs
│   └── update.ejs
│
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md

🔄 Application Workflow
Create Task
      │
      ▼
Save in MongoDB
      │
      ▼
Display on Dashboard
      │
      ├────────► Update Task
      │
      ├────────► Delete Task
      │
      └────────► Select Multiple Tasks → Delete


