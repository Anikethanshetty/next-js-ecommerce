import { defineConfig } from "drizzle-kit";
import { env } from "./data/env/sever";

export default defineConfig({
  out: "./drizzle/migrations",
  dialect: "postgresql",
  schema: "./drizzle/schema",
  strict: true,
  verbose: true,
  driver: "pglite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
});

