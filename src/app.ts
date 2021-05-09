import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes';
import Error from './shared/errors'

const app = express();

app.use(express.json());
app.use(router);
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  if (err instanceof Error) {
    return res.status(err.status).json({
      status: 'error',
      message: err.message,
    })
  }

  console.error(err)

  return res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  })
})

export { app };
