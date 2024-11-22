require('dotenv').config();
const express = require('express');
const connectDB = require('./database/dbconnect');
const userRoutes = require('./routes/userRoutes');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5100;

connectDB();

app.use(cors());
app.use(express.json());

app.use('/job', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
