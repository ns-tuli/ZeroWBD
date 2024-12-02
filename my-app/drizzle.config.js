// Import the dotenv package
import dotenv from 'dotenv';

// Load the environment variables from .env file
dotenv.config();

export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: process.env.DATABASE_URL,
    connectionString: process.env.DATABASE_URL,
  },
};
