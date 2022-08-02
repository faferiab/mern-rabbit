import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/diary', (_req: Request, res: Response) => {
    res.send('GET')
})
router.post('/diary', (_req: Request, res: Response) => {
    res.send('POST')
})

export default router;