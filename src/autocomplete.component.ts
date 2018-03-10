import { Component, OnInit, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

@Component({
  selector: 'autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AutocompleteComponent implements OnInit {

  @Output() onOptionSelection: EventEmitter<any> = new EventEmitter();

  @Input('options') options: any;
   /**
   * This stores all the selected Items in array of objects
   */
  selectedItems: object[];
  listState: boolean;
  filteredItems: object[];
  searchInput: string;
  constructor() { }

  ngOnInit() {
    this.selectedItems = [];
    this.listState = false;
    this.setFilteredItems();
  }

  onSelection(option) {
    this.selectedItems.push(option);
    this.options.splice(this.options.indexOf(option), 1);
    this.listState = false;
    this.resetFilteredItems();
    this.searchInput = '';
    this.onOptionSelection.emit(this.selectedItems);
  }

  removeItem(option) {
    this.selectedItems.splice(this.selectedItems.indexOf(option), 1);
    this.options.push(option);
    this.setFilteredItems();
    this.listState = false;
    this.onOptionSelection.emit(this.selectedItems);
  }

  onSearch(event) {
    if (this.searchInput !== '') {
      this.filteredItems = this.options.filter((option: any) => {
        return option.value.indexOf(this.searchInput) === 0;
      });
    }
    this.listState = true;
  }

  setFilteredItems() {
    this.filteredItems = this.options.slice();
  }

  resetFilteredItems() {
    this.filteredItems = [];
  }

}
