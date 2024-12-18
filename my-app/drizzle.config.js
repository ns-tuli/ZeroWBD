// Import the dotenv package
import dotenv from 'dotenv';

// Load the environment variables from .env file
dotenv.config();

export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://zerowbd_owner:xrPbkBjoi7D6@ep-weathered-glitter-a15z1a2w.ap-southeast-1.aws.neon.tech/zerowbd?sslmode=require",
    connectionString: "postgresql://zerowbd_owner:xrPbkBjoi7D6@ep-weathered-glitter-a15z1a2w.ap-southeast-1.aws.neon.tech/zerowbd?sslmode=require"
  },
};
