import dotenv from 'dotenv';
import express, { Express } from 'express';
import diaryRoutes from './modules/diaries/diary.controller';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use('/api/v1', diaryRoutes);
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
