import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing",
            });
        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.decode(token);

        if (!decoded || !decoded.sub) {
            return res.status(401).json({
                success: false,
                message: "Invalid token",
            });
        }

        // ✅ ALWAYS use sub
        req.clerkId = decoded.sub;

        console.log("CLERK ID FROM TOKEN:", req.clerkId);

        next();
    } catch (error) {
        console.error(error.message);
        return res.status(401).json({ success: false });
    }
};

export default authUser;
