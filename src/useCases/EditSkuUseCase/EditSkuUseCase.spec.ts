import { FakeSkuRepository } from "../../repositories/implementations/FakeSkuRepository";
import ISkuRepository from "../../repositories/ISkuRepository";
import { EditSkuUseCase } from "./EditSkuUseCase";

let skusRepository: ISkuRepository
let editSkuUseCase: EditSkuUseCase

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

    editSkuUseCase = new EditSkuUseCase(
      skusRepository,
    )
  })

  test('Should be able to edit a sku name', async () => {
    await skusRepository.save(skuBody)
    const result = await editSkuUseCase.execute(43264, { name: 'teste' })

    expect(result.name).toEqual('teste')
  })

  test('Should be throw an error message because sku not found ', async () => {
    try {
      await editSkuUseCase.execute(43264, { name: 'teste' })
    } catch (err) {
      expect(err.message).toEqual('No sku found.')
    }
  })
})
