import express from 'express'
import connectDB from "./db/connectdb.js";
import web from "./routes/web.js";
import cors from 'cors'
import session from 'express-session';
import jsonwebtoken from 'jsonwebtoken';
// const jwt = require('jsonwebtoken')
const app = express()
app.use(cors())
const port = process.env.PORT || '8000'
// const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://Ganesh:Ganesh123@cluster0.m9i3v.mongodb.net/?retryWrites=true&w=majority";

// Database Connection
connectDB(DATABASE_URL);

// JSON
app.use(express.json())
app.use(session({
  secret:'secret-key',
  resave:false,
  saveUninitialized:true,
}))
// Load Routes
app.use("/api", web)

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
 })

