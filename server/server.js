import "dotenv/config";
import express from "express";
import cors from "cors"
import connectDb from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";


const PORT = process.env.PORT || 5000;

const app = express();
await connectDb();

app.use(express.json());
// app.use(cors());
app.use(
    cors({
        origin: "http://localhost:5173" || "bg-remove-pink.vercel.app", // frontend URL
        credentials: true,
        allowedHeaders: ["Content-Type", "Authorization"],
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);



app.get("/", (req, res) => {
    res.send("app is working");
});

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})