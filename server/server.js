const express = require("express");
const app = express();
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 8000
const connectDB = require("./config/config.db")
connectDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

require("./routes/savedPokemonRoutes")(app);
app.listen(PORT, () => console.log(' Database successfully connected on port: ' + PORT))
