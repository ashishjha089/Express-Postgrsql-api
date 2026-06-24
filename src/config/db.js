import pkg from 'pg';
import dotenv from "dotenv";

const { Pool } = pkg;
dotenv.config();


console.log(process.env.DB_USER);
console.log(process.env.DB_PASSWORD);
console.log(process.env.DB_NAME);
console.log(process.env.DB_HOST);
console.log(process.env.DB_PORT);

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT
});

pool.on('connect', () => {
    console.log('Connected to the database');
});
 
export default pool;