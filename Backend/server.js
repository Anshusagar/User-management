const express = require('express');

require('dotenv').config();


// const authRoutes = require('./routes/auth');
// const taskRoutes = require('./routes/tasks');
// const noteRoutes = require('./routes/notes');
const userRoutes = require('./routes/users');

const app = express();

// Middleware
app.use(express.json());
const mongoose = require('mongoose');


// MongoDB connection with proper error handling
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1); 
    }
};

connectDB();

// // Routes
// app.use('/api/auth', authRoutes);
// app.use('/api/tasks', taskRoutes);
// app.use('/api/notes', noteRoutes);
app.get('/', (req, res) => {
  res.send('API is running...');
});
app.use('/api/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;