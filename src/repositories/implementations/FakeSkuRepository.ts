import { Sku } from '../../entities/Sku';
import ISkuRepository from '../ISkuRepository';

export class FakeSkuRepository implements ISkuRepository {
  private skus: Sku[] = [];

  public async findBySku(skuId: number): Promise<Sku | undefined> {
    const findSku = this.skus.find(sku => sku.sku === skuId);
    return findSku;
  }

  public async save(skuObj: Sku): Promise<Sku> {
    const sku = new Sku(skuObj)
    this.skus.push(skuObj)
    return sku
  }

  public async edit(skuObj: Sku): Promise<Sku> {
    this.skus.forEach((sku, index) => {
      if (sku.sku === skuObj.sku) {
        this.skus.splice(index, 1)
      }
    })
    this.skus.push(skuObj)
    return skuObj
  }

  public async deleteBySku(skuId: number): Promise<Sku[]> {
    this.skus.forEach((skuObj, index) => {
      if (skuObj.sku === skuId) {
        this.skus.splice(index, 1)
      }
    })
    return this.skus
  }
}
