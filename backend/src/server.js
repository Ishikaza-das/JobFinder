require('dotenv').config();
const express = require('express');
const connectDB = require('./database/dbconnect');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');
const cookieParser = require('cookie-parser');

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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
