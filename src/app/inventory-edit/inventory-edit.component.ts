import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {
  @Input() childSelectedItem: Item;
  @Output() doneClickedSender= new EventEmitter();

  doneClicked() {
    this.doneClickedSender.emit();
  }

  ngOnInit() {
  }

}
