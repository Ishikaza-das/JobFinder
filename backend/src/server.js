require('dotenv').config();
const express = require('express');
const connectDB = require('./database/dbconnect');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 5100;

connectDB();

app.use(cors({
  origin: process.env.FRONTEND,
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/job', authRoutes);
app.use('/job/auth',googleAuthRoutes);
app.use('/auth', userRoutes);
// app.use('/admin/ds', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
