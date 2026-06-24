import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import pool from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Midlewares 
app.use(express.json());
app.use(cors());

//Routes
app.get('/', (req, res) => {
   res.json({ message: 'API is running', status: 'success' });
});

app.use("/api",userRoutes);


//Error handling midleware
app.use(errorHandler);

// Teting postgres connection
app.get('/test-db', async (req, res) => {
   const result  = await pool.query("Select current_database()");
   res.send(`Database connected: ${result.rows[0].current_database}`);
});

//server listening
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
