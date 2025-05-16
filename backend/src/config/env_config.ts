import dotenv from 'dotenv'

dotenv.config()

interface Config {
    PORT: number;
    nodeENV: string;
    DB_PORT: number;
    DB_USER: string;
    DB_PASS: string;
    DB_NAME?: string;
}

const config: Config = {
    PORT: Number(process.env.PORT) || 3000,
    nodeENV: process.env.NODE_ENV || "development",
    DB_PORT: Number(process.env.DB_PORT) || 5432,
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASS: process.env.DB_PASS || 'postgres',
    DB_NAME: process.env.DB_NAME || '',
}

export default config;