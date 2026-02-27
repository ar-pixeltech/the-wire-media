import { Pool } from "pg";

const globalForPg = global as unknown as { pool: Pool };

export const pool =
    globalForPg.pool ||
    new Pool({
        connectionString: process.env.DATABASE_URL,
    });

if (process.env.NODE_ENV !== "production") globalForPg.pool = pool;

export async function testConnection() {
    try {
        const client = await pool.connect();
        console.log("✅ PostgreSQL Connected Successfully");
        client.release();
    } catch (error) {
        console.error("❌ PostgreSQL Connection Failed:", error);
    }
}