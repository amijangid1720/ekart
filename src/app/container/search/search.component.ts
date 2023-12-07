import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchText: string = '';
  
  // View Child is used to get reference of a DOM element , component & directive from view to its com[ponent class]
  // assigns a dom element reference to a component class property
  @ViewChild('searchInput')
  searchInputElement:ElementRef;

 

  // Custom Event
  @Output()
  searchTextEvent: EventEmitter<string> = new EventEmitter<string>();

  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
    this.searchTextEvent.emit(this.searchText);

  }
}
