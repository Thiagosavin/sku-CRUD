export interface IWarehouses {
  locality?: string;
  quantity?: number;
  type?: string
}

export interface IEditSkuDTO {
  name?: string;
  inventory?: {
    warehouses?: IWarehouses[];
  }
}


