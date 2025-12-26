import "dotenv/config";
import express from "express";
import cors from "cors"
import connectDb from "./configs/mongodb.js";


const PORT = process.env.PORT || 5000;

const app = express();
await connectDb();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("app is working");
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})