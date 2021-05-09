export interface IWarehouses {
  locality: string;
  quantity: number;
  type: string
}

export interface ICreateSkuDTO {
  sku: number;
  name: string;
  inventory: {
    warehouses: IWarehouses[];
  }
}


