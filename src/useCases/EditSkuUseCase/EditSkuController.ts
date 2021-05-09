import { Request, Response } from 'express';
import { EditSkuUseCase } from './EditSkuUseCase';
export class EditSkuController {
  constructor(private editSkuController: EditSkuUseCase) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const parseSku = parseInt(req.query.sku as string, 10)
    try {
      const result = await this.editSkuController.execute(parseSku, req.body);
      return res.status(200).send(result);
    } catch (err) {
      return res.status(err.status || 400).json({
        message: err.message || 'Unmmapped error.',
      });
    }
  }
}
