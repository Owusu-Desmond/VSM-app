import dotenv from 'dotenv'

dotenv.config()

interface Config {
    port: number,
    nodeENV: string
}

const config: Config = {
    port: Number(process.env.PORT) || 3000,
    nodeENV: process.env.NODE_ENV || "development"
}

export default config;