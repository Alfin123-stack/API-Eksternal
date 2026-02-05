import dotenv from "dotenv";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || "development";

const server = app.listen(PORT, () => {
  console.log("====================================");
  console.log(`🚀 External API Service started`);
  console.log(`📦 Environment : ${NODE_ENV}`);
  console.log(`🌐 Listening on : http://localhost:${PORT}`);
  console.log("====================================");
});

/**
 * Graceful shutdown
 */
const shutdown = (signal) => {
  console.log(`\n🛑 Received ${signal}. Shutting down gracefully...`);

  server.close(() => {
    console.log("✅ Server closed successfully");
    process.exit(0);
  });

  // Force shutdown after 10s
  setTimeout(() => {
    console.error("❌ Force shutdown");
    process.exit(1);
  }, 10000);
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
