const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

const PORT = process.env.PORT || 9000

require('dotenv').config();

const connectDB = require('./config/config.db')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.listen(PORT, () => console.log('Database successfully connected!'))
