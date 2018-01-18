import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { InventoryEditComponent } from './inventory-edit/inventory-edit.component';
import { FormsModule }  from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    InventoryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
