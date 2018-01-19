import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { FormsModule }  from '@angular/forms';
import { InventoryNewComponent } from './inventory-new/inventory-new.component';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryEditComponent,
    InventoryNewComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
