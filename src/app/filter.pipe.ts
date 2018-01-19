import { Pipe, PipeTransform } from '@angular/core';
import { Item } from './item.model';


@Pipe ({
  name: 'filter',
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Item[], desiredInventory) {
    const output: Item[] = [];
    if(desiredInventory === "highEnergy") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].energy >= 20) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredInventory === "cheap") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].price <= 100) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
