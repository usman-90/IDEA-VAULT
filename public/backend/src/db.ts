import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});
async function executeQuery(query, values) {
  const client = await pool.connect();
  try {
    const result = await client.query(query, values);
    return result.rows;
  } catch (e) {
    console.log(e);
  } finally {
    client.release();
  }
}

export default executeQuery;
