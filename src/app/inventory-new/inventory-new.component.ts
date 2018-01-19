import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory-new',
  templateUrl: './inventory-new.component.html',
  styleUrls: ['./inventory-new.component.css']
})
export class InventoryNewComponent implements OnInit {
  @Output() newItemSender = new EventEmitter();
  submitForm(name: string, price: number, farmer: string, energy: number, pic: string) {
    const newItemToAdd: Item = new Item(name, price, farmer, energy, pic);
    this.newItemSender.emit(newItemToAdd);
  }
  showMenu: boolean = false;
  addItemMenu() {
    this.showMenu = !this.showMenu;
  }
  ngOnInit() {
  }

}
