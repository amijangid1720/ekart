import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

 @Input()
 all:number=undefined;
 @Input()
 inStock:number=undefined;
 @Input()
 outOfStock:number=undefined;

 selectedRadioButton:string='all';


//Our custom Event emitter 
 @Output()
 selectedRadioButtonChanged:EventEmitter<string>=new EventEmitter<string>();

 onSelectedRadioButtonChanged() {
  
  this.selectedRadioButtonChanged.emit(this.selectedRadioButton);
  }
}
