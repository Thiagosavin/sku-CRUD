import ISkuRepository from '../../repositories/ISkuRepository';
import AppError from '../../shared/errors'

export class FindSkuUseCase {
  constructor(
    private skusRepository: ISkuRepository,
  ) { }
  async execute(skuId: number) {
    const Sku = await this.skusRepository.findBySku(skuId);
    if (!Sku) {
      throw new AppError('Informed sku does not exist.');
    }
    return Sku
  }
}
