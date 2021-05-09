import { FakeSkuRepository } from "../../repositories/implementations/FakeSkuRepository";
import ISkuRepository from "../../repositories/ISkuRepository";
import { DeleteSkuUseCase } from "./DeleteSkuUseCase";

let skusRepository: ISkuRepository
let deleteSkuUseCase: DeleteSkuUseCase

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

    deleteSkuUseCase = new DeleteSkuUseCase(
      skusRepository,
    )
  })

  test('Should be able to delete a sku', async () => {
    await skusRepository.save(skuBody)

    const result = await deleteSkuUseCase.execute(43264)

    expect(result.length).toEqual(0)

  })

  test('Should be able to return the sku array', async () => {
    await skusRepository.save(skuBody)

    const result = await deleteSkuUseCase.execute(4322264)

    expect(result.length).toEqual(1)
  })
})
