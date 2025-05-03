import { PrismaClient } from "@prisma/client";
import { PrismaLibSQL } from "@prisma/adapter-libsql";
import { createClient } from "@libsql/client";

declare global {
  // Evita recriar o PrismaClient durante hot-reloads no dev
  var prisma: PrismaClient | undefined;
}

const databaseUrl = process.env.TURSO_DATABASE_URL;
const authToken = process.env.TURSO_AUTH_TOKEN;

if (!databaseUrl) {
  throw new Error("TURSO_DATABASE_URL environment variable is not defined.");
}

if (!authToken) {
  throw new Error("TURSO_AUTH_TOKEN environment variable is not defined.");
}

const libsql = createClient({
  url: databaseUrl,
  authToken: authToken,
});

const adapter = new PrismaLibSQL(libsql);
const db = globalThis.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}

export default db;
