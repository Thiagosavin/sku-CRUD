import ISkuRepository from '../../repositories/ISkuRepository';
import AppError from '../../shared/errors'
import { FormatSku } from '../../shared/helper/formatSKU';

export class DeleteSkuUseCase {
  constructor(
    private skusRepository: ISkuRepository,
  ) { }
  async execute(sku: number) {
    const skus = await this.skusRepository.deleteBySku(sku);

    return skus
  }
}
