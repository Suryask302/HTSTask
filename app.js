import { config } from 'dotenv';
config({
    path: './.env'
})
import express, { json, urlencoded } from 'express';
import userRouter from './routes/user.js';
export const app = express();

app.use(json())
app.use(urlencoded({ extended: true }))



app
    .get('/', (req, res) => {
        res.json({ message: 'API is running...' })
    })

app.use('/api/v1/user', userRouter)