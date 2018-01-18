import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  items: Item[] = [
    new Item('Sugar', 100, 'Marnie', 25, 'assets/img/Sugar.png'),
    new Item('Rice', 200, 'George', 13, 'assets/img/Rice.png'),
    new Item('Strawberry', 100, 'Egg Festival', 50, 'assets/img/Strawberry.png'),
    new Item('Hot Pepps', 40, 'Shane', 12, 'assets/img/Hot_Pepper.png'),
    new Item('Eggplant', 20, 'Pam', 20, 'assets/img/Eggplant.png'),
    new Item('Eggs', 90, 'Marnie', 50, 'assets/egg.png'),
    new Item('Goat Milk', 500, 'Lew', 500, 'assets/img/Goat_Milk.png'),
    new Item('Void Egg', 8000, 'Krobus', -50, 'assets/img/void.png')
  ];
  selectedItem = null;
  editItem(clickedItem) {
    this.selectedItem = clickedItem;
  }
  finishedEditing() {
    this.selectedItem = null;
  }
  constructor() { }

  ngOnInit() {
  }

}

export class Item {
  constructor(public name: string, public price: number, public farmer: string, public energy: number, public pic: string) { }
}
