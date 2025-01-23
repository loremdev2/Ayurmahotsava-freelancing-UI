import mysql, { Pool } from 'mysql2/promise';

// Create a pool instance for database connections
const pool: Pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10, // Optional: Set connection limit
});

export default pool;
