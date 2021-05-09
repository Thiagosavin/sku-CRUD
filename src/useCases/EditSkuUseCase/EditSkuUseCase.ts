import ISkuRepository from '../../repositories/ISkuRepository';
import AppError from '../../shared/errors'
import { IEditSkuDTO } from './EditSkuDTO';

export class EditSkuUseCase {
  constructor(
    private skusRepository: ISkuRepository,
  ) { }
  async execute(sku: number, data: IEditSkuDTO) {
    let skuObj = await this.skusRepository.findBySku(sku)
    if (!skuObj) {
      throw new AppError('No sku found.')
    }
    for (const key in data) {
      skuObj[key] = data[key]
    }
    const result = await this.skusRepository.edit(skuObj)
    return result
  }
}
