import { FakeSkuRepository } from "../../repositories/implementations/FakeSkuRepository";
import ISkuRepository from "../../repositories/ISkuRepository";
import { CreateSkuUseCase } from "./CreateSkuUseCase";

let skusRepository: ISkuRepository
let createSkuUseCase: CreateSkuUseCase

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

    createSkuUseCase = new CreateSkuUseCase(
      skusRepository,
    )
  })

  test('Should be able to add a new sku', async () => {
    const result = await createSkuUseCase.execute(skuBody)

    expect(result).toHaveProperty('name')
    expect(result.inventory).toHaveProperty('warehouses')
    expect(result.sku).toEqual(43264)

  })


  test('Should be throw an error message because sku already exists ', async () => {
    await createSkuUseCase.execute(skuBody)
    try {
      await createSkuUseCase.execute(skuBody)
    } catch (err) {
      expect(err.message).toEqual('Informed sku already exists.')
    }
  })
})
