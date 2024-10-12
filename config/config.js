import dotenv from "dotenv";
dotenv.config();

const config = {
  DATABASE_URL: process.env.DATABASE_URL,
  USER_NAME: process.env.USER_NAME,
  PASSWORD: process.env.PASSWORD,
  DB_NAME: process.env.DB_NAME,
  PORT: process.env.PORT || 3306,
};

export default config;
