import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
import cors from 'cors';

app.use(cors());

app.get('/', (req, res)=> {
    res.send('Hello World');
})

export default app;