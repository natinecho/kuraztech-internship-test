import express from 'express';
import taskRoutes from './route/task.js';

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/tasks', taskRoutes);

export default app;
