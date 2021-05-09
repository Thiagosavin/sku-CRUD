import { Sku } from '../entities/Sku';

export default interface ISkuRepository {
  deleteBySku(sku: number): Promise<Sku[]>;
  findBySku(sku: number): Promise<Sku | undefined>
  save(sku: Sku): Promise<Sku>
  edit(sku: Sku): Promise<Sku>
}
