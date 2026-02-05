import express from "express";
import helmet from "helmet";
import cors from "cors";

import userPreferenceRoutes from "./routes/userPreferenceRoutes.js";
import tutorialRoutes from "./routes/tutorialRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();

/**
 * ==============================
 * Global Middleware
 * ==============================
 */

// Trust proxy (penting kalau deploy di Vercel / Nginx)
app.set("trust proxy", 1);

// CORS configuration
app.use(
  cors({
    origin: "*", // nanti bisa diganti whitelist
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Body parser
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// Security headers
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: false, // aman untuk API
  })
);

/**
 * ==============================
 * Health Check
 * ==============================
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    service: "external-api",
    timestamp: new Date().toISOString(),
  });
});

/**
 * ==============================
 * API Routes
 * ==============================
 */
app.use("/api/users", userPreferenceRoutes);
app.use("/api/tutorials", tutorialRoutes);

/**
 * ==============================
 * 404 Handler
 * ==============================
 */
app.use((req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
    path: req.originalUrl,
  });
});

/**
 * ==============================
 * Global Error Handler
 * ==============================
 */
app.use(errorHandler);

export default app;
