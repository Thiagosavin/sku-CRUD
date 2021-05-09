import { Request, Response } from 'express';
import { FormatSku } from '../../shared/helper/formatSKU';
import { CreateSkuUseCase } from './CreateSkuUseCase';

export class CreateSkuController {
  constructor(private createSkuUseCase: CreateSkuUseCase) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const { sku, name, inventory } = req.body
    try {
      const result = await this.createSkuUseCase.execute({
        sku, name, inventory
      });
      const formatResult = FormatSku(result)

      return res.status(201).send(formatResult);
    } catch (err) {
      return res.status(err.status || 400).json({
        message: err.message || 'Unmmapped error.',
      });
    }
  }
}
