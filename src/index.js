import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

//Midlewares 
app.use(express.json());
app.use(cors());

//Routes


//Error handling midleware


//server listening
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
