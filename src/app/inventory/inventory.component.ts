import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  @Input() childItemList: Item[];
  @Input() childEmployeeShow: boolean;
  @Output() clickSender= new EventEmitter();
  @Output() buySender= new EventEmitter();
  @Output() buyCartonSender= new EventEmitter();
  @Output() buyCaseSender= new EventEmitter();
  @Output() employeeClickSender= new EventEmitter();

  editItemClicked(itemToEdit: Item) {
    this.clickSender.emit(itemToEdit);
  }
  employeeClick(employeeShow) {
    this.employeeClickSender.emit(employeeShow);
  }

  buyItemClicked(itemSold: Item) {
    this.buySender.emit(itemSold);
  }
  buyCartonClicked(itemSold: Item) {
    this.buyCartonSender.emit(itemSold);
  }
  buyCaseClicked(itemSold: Item) {
    this.buyCaseSender.emit(itemSold);
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

  filterByFullInventory: string = 'allInventory';

  onChange(optionFromMenu) {
    this.filterByFullInventory = optionFromMenu;
  }



  constructor() { }

  ngOnInit() {
  }

}
