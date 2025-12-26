import "dotenv/config";
import express from "express";
import cors from "cors";
import connectDb from "./configs/mongodb.js";
import userRouter from "./routes/userRoutes.js";
import imageRouter from "./routes/imageRoutes.js";

const PORT = process.env.PORT || 5000;

const app = express();
await connectDb();

app.use(express.json());

// ✅ CORRECT CORS (ENOUGH – no options("*") needed)
app.use(
    cors({
        origin: [
            "http://localhost:5173",
            "https://bg-remove-pink.vercel.app",
        ],
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.get("/", (req, res) => {
    res.send("app is working");
});

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
