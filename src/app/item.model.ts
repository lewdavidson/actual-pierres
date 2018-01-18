export class Item {
  quantity: number;
  constructor(public name: string, public price: number, public farmer: string, public energy: number, public pic: string) {
    this.quantity = 64;
  }
}
