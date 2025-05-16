import config from "./config/env_config"
import app from "./app";
import { AppDataSource } from "./data-source";

AppDataSource.initialize()
.then(() => {
        console.log("Database Connected")
        app.listen(config.PORT, () => console.log(`🚀 Server running on port ${config.PORT}`))
    }
).catch(err => console.error('❌ DB connection failed', err))
