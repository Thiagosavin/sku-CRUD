import { Request, Response } from 'express';
import { FormatSku } from '../../shared/helper/formatSKU';
import { FindSkuUseCase } from './FindSkuUseCase';
export class FindSkuController {
  constructor(private findSkuController: FindSkuUseCase) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const parseSku = parseInt(req.query.sku as string, 10)
    try {
      const result = await this.findSkuController.execute(parseSku);
      const formatResult = FormatSku(result)
      return res.status(200).send(formatResult);
    } catch (err) {
      return res.status(err.status || 400).json({
        message: err.message || 'Unmmapped error.',
      });
    }
  }
}
