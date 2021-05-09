import { Request, Response } from 'express';
import { FormatSku } from '../../shared/helper/formatSKU';
import { DeleteSkuUseCase } from './DeleteSkuUseCase';
export class DeleteSkuController {
  constructor(private deleteSkuController: DeleteSkuUseCase) { }
  async handle(req: Request, res: Response): Promise<Response> {
    const parseSku = parseInt(req.query.sku as string, 10)
    try {
      const result = await this.deleteSkuController.execute(parseSku);
      const formatResult = result.map(obj => FormatSku(obj))

      return res.status(200).send(formatResult);
    } catch (err) {
      return res.status(err.status || 400).json({
        message: err.message || 'Unmmapped error.',
      });
    }
  }
}
