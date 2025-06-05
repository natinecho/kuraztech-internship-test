import app from './app.js';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.DB_CONNECTION_URL).then(() => {
  console.log('Connected to Database');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch(err => {
  console.error('connection error:', err);
});
