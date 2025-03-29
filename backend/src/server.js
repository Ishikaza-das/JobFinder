require('dotenv').config();
const express = require('express');
const connectDB = require('./database/dbconnect');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const authRoutes = require('./routes/authRoutes');
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const userRoutes = require('./routes/userRoutes');
const companyAuthRoutes = require('./routes/companyAuthRoutes');
const companyRoutes = require('./routes/companyRoutes');
const openingsRoutes = require('./routes/openingsRoutes');
const detailsRoutes = require('./routes/detailsRoutes');
const educationRoutes = require('./routes/educationRoutes');
const internshipRoutes = require('./routes/internshipRoutes');
const projectRoutes = require('./routes/projectRoutes');
const responsibilityRouter = require('./routes/responsibilityRoutes');
const skillRoutes = require('./routes/skillRoutes');


const app = express();
const PORT = process.env.PORT || 5100;

connectDB();

app.use(cors({
  origin: process.env.FRONTEND,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['set-cookie']
}));

app.use(express.json());
app.use(cookieParser());

app.use('/job', authRoutes);
app.use('/job/auth',googleAuthRoutes);
app.use('/auth', userRoutes);
app.use('/post-job',companyAuthRoutes);
app.use('/company',companyRoutes);
app.use('/openings',openingsRoutes);
app.use('/profile',detailsRoutes,educationRoutes,internshipRoutes,projectRoutes,responsibilityRouter,skillRoutes);

// app.use('/admin/ds', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
