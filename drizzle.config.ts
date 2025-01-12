import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

export default defineConfig({
  out: "./drizzle/migrations",
  dialect: "postgresql",
  schema: "./drizzle/schema.ts",
  strict: true,
  verbose: true,
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
