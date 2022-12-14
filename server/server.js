const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 4000
const connectDB = require("./config/config.db")
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({credentials: true, origin: "http://localhost:3000"}))

require("./routes/savedPokemonRoutes")(app);
app.listen(PORT, () => console.log(' Database successfully connected on port: ' + PORT))
