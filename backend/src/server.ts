import config from "./config/env_config"
import app from "./app";

app.listen(config.port, () => {
    console.log(`App running on port ${config.port}`)
})