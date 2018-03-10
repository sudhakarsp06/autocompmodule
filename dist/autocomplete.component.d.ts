import { OnInit, EventEmitter } from '@angular/core';
export declare class AutocompleteComponent implements OnInit {
    onOptionSelection: EventEmitter<any>;
    options: any;
    /**
    * This stores all the selected Items in array of objects
    */
    selectedItems: object[];
    listState: boolean;
    filteredItems: object[];
    searchInput: string;
    constructor();
    ngOnInit(): void;
    onSelection(option: any): void;
    removeItem(option: any): void;
    onSearch(event: any): void;
    setFilteredItems(): void;
    resetFilteredItems(): void;
}
