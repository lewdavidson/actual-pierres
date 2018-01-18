import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() childItemList: Item[];
  @Output() clickSender= new EventEmitter();
  @Output() buySender= new EventEmitter();

  editItemClicked(itemToEdit: Item) {
    this.clickSender.emit(itemToEdit);
  }

  buyItemClicked(itemSold: Item) {
    this.buySender.emit(itemSold);
  }

  priorityColor(currentItem) {
    if (currentItem.quantity <= 25) {
      return "text-red";
    }else{
      return '';
    }
  }

  priceColor(currentItem) {
    if (currentItem.price <= 100) {
      return "green-price";
    } else if (currentItem.price <= 1000) {
      return "blue-price";
    } else {
      return "text-red";
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
