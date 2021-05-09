import { FakeSkuRepository } from "../../repositories/implementations/FakeSkuRepository";
import ISkuRepository from "../../repositories/ISkuRepository";
import { FindSkuUseCase } from "./FindSkuUseCase";

let skusRepository: ISkuRepository
let findSkuUseCase: FindSkuUseCase

const skuBody = {
  "sku": 43264,
  "name": "L'Oréal Professionnel Expert Absolut Repair Cortex Lipidium - Máscara de Reconstrução 500g",
  "inventory": {
    "warehouses": [
      {
        "locality": "SP",
        "quantity": 12,
        "type": "ECOMMERCE"
      },
      {
        "locality": "MOEMA",
        "quantity": 3,
        "type": "PHYSICAL_STORE"
      }
    ]
  },
}

describe('Save new Skun UseCase', () => {
  beforeEach(() => {
    skusRepository = new FakeSkuRepository()

    findSkuUseCase = new FindSkuUseCase(
      skusRepository,
    )
  })

  test('Should be able to find a sku by the sku id', async () => {
    await skusRepository.save(skuBody)
    const result = await findSkuUseCase.execute(43264)

    expect(result.sku).toEqual(43264)
  })

  test('Should be throw an error message because the id was not found ', async () => {
    try {
      await findSkuUseCase.execute(43264)
    } catch (err) {
      expect(err.message).toEqual('Informed sku does not exist.')
    }
  })

})
