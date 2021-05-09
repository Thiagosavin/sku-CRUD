import ISkuRepository from '../../repositories/ISkuRepository';
import { ICreateSkuDTO } from './CreateSkuDTO';
import AppError from '../../shared/errors'
import { Sku } from '../../entities/Sku';
import { FormatSku } from '../../shared/helper/formatSKU';

export class CreateSkuUseCase {
  constructor(
    private skusRepository: ISkuRepository,
  ) { }
  async execute(data: ICreateSkuDTO) {
    const hasSku = await this.skusRepository.findBySku(data.sku);
    if (hasSku) {
      throw new AppError('Informed sku already exists.');
    }
    const newSku = new Sku(data)

    await this.skusRepository.save(newSku)

    return newSku
  }
}
