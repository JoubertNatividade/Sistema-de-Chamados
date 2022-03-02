import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import 'express-async-errors';

import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes)



app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({ err: err.message })
    }

    return response.status(500).json({ status: 'Error', message: 'Internal Server ' })
})





app.listen(3330, () => { console.log('🚀 Server Started - Port 3330.') });

