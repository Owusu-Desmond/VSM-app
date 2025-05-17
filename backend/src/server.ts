import config from "./config/env_config"
import app from "./app";
import { AppDataSource } from "./data-source";

console.log("🟡 Starting server... Initializing DB connection");

const CONNECTION_TIMEOUT = setTimeout(() => {
  console.warn("⏳ Still waiting to connect to the database...");
}, 5000);

AppDataSource.initialize()
  .then(() => {
    clearTimeout(CONNECTION_TIMEOUT);
    console.log("Database Connected");
    app.listen(config.PORT, () => {
      console.log(`Server running on port ${config.PORT}`);
    });
  })
  .catch((err) => {
    clearTimeout(CONNECTION_TIMEOUT);
    console.error("❌ DB connection failed", err);
  });