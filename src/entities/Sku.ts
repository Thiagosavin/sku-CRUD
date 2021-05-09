
export class Warehouses {
  public locality: string;
  public quantity: number;
  public type: string

  constructor(props: Warehouses,) {
    Object.assign(this, props);
  }
}


export class Sku {
  public sku: number;
  public name: string;
  public inventory: {
    warehouses: Warehouses[]
  };

  constructor(props: Sku,) {
    Object.assign(this, props);
  }
}
