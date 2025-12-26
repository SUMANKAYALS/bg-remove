// Clerk Webhook Controller
// POST: /api/user/webhooks

import { Webhook } from "svix";
import userModel from "../models/userModel.js";

export const clerkWebhook = async (req, res) => {
    try {
        // 1️⃣ Verify webhook signature
        const webhook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

        webhook.verify(JSON.stringify(req.body), {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        });

        // 2️⃣ Extract event data
        const { data, type } = req.body;

        switch (type) {
            case "user.created": {
                await userModel.create({
                    clerkId: data.id,
                    email: data.email_addresses[0].email_address,
                    firstName: data.first_name,
                    lastName: data.last_name,
                    photo: data.image_url,
                });

                return res.status(200).json({ success: true });
            }

            case "user.updated": {
                await userModel.findOneAndUpdate(
                    { clerkId: data.id },
                    {
                        email: data.email_addresses[0].email_address,
                        firstName: data.first_name,
                        lastName: data.last_name,
                        photo: data.image_url,
                    },
                    { new: true }
                );

                return res.status(200).json({ success: true });
            }

            case "user.deleted": {
                await userModel.findOneAndDelete({ clerkId: data.id });

                return res.status(200).json({ success: true });
            }

            default:
                // Always respond to unknown events
                return res.status(200).json({ success: true });
        }
    } catch (error) {
        console.error("❌ Clerk Webhook Error:", error.message);
        return res.status(400).json({
            success: false,
            message: "Webhook verification failed",
        });
    }
};


// api controller function to get user available credits data

export const userCredit = async (req, res) => {
    try {
        // ✅ clerkId comes from middleware
        const clerkId = req.clerkId;

        if (!clerkId) {
            return res.status(401).json({
                success: false,
                message: "Unauthorized",
            });
        }

        const userData = await userModel.findOne({ clerkId });

        if (!userData) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.json({
            success: true,
            credits: userData.creditBalance,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};

