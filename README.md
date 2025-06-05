# 🛠️ Task REST API

A simple RESTful API using Express.js and MongoDB for task management.

## 🚀 Features
- Add, view, update, delete tasks
- Filter by completion status
- Validation for title
- Optional "API is running" landing page

## 🧪 API Endpoints

- `GET /api/tasks` - Get all tasks
- `POST /api/tasks` - Add new task `{ "title": "Task title" }`
- `PUT /api/tasks/:id` - Mark as completed
- `DELETE /api/tasks/:id` - Delete a task
- `GET /api/tasks?completed=true|false` - Filter by completion

## 🛠 Setup
```bash
npm install
npm run dev
