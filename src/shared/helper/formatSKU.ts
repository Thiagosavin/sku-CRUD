import { Sku } from "../../entities/Sku";

const FormatSku = (data: Sku) => {
  let quantity = 0
  data.inventory.warehouses.forEach((invObj) => {
    quantity += invObj.quantity
  })
  const isMarketable = (quantity > 0)
  return {
    sku: data.sku,
    name: data.name,
    inventory: {
      quantity,
      warehouse: data.inventory.warehouses
    },
    isMarketable,
  }
}

export { FormatSku }
