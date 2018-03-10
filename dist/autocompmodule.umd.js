(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/platform-browser'), require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/platform-browser', '@angular/core', '@angular/forms'], factory) :
	(factory((global.autocompmodule = {}),global.platformBrowser,global.core,global.forms));
}(this, (function (exports,platformBrowser,core,forms) { 'use strict';

var AutocompleteComponent = (function () {
    function AutocompleteComponent() {
        this.onOptionSelection = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.ngOnInit = function () {
        this.selectedItems = [];
        this.listState = false;
        this.setFilteredItems();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    AutocompleteComponent.prototype.onSelection = function (option) {
        this.selectedItems.push(option);
        this.options.splice(this.options.indexOf(option), 1);
        this.listState = false;
        this.resetFilteredItems();
        this.searchInput = '';
        this.onOptionSelection.emit(this.selectedItems);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    AutocompleteComponent.prototype.removeItem = function (option) {
        this.selectedItems.splice(this.selectedItems.indexOf(option), 1);
        this.options.push(option);
        this.setFilteredItems();
        this.listState = false;
        this.onOptionSelection.emit(this.selectedItems);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    AutocompleteComponent.prototype.onSearch = function (event) {
        var _this = this;
        if (this.searchInput !== '') {
            this.filteredItems = this.options.filter(function (option) {
                return option.value.indexOf(_this.searchInput) === 0;
            });
        }
        this.listState = true;
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.setFilteredItems = function () {
        this.filteredItems = this.options.slice();
    };
    /**
     * @return {?}
     */
    AutocompleteComponent.prototype.resetFilteredItems = function () {
        this.filteredItems = [];
    };
    return AutocompleteComponent;
}());
AutocompleteComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'autocomplete',
                template: "<div class=\"autocomplete container\"> <div class=\"wrapper-box\"> <div class=\"single-item-wrapper\"> <div *ngFor=\"let selected of selectedItems\" class=\"single-item\">{{selected.value}} <span (click)=\"removeItem(selected)\" class=\"close\">X</span> </div> </div> <textarea placeholder=\"Type in\" [(ngModel)]=\"searchInput\" class=\"text-box\" (keyup)=\"onSearch($event)\"></textarea> </div> <div class=\"list-wrapper\"> <ul class=\"list\" *ngIf=\"filteredItems.length > 0 && listState === true\"> <li (click)=\"onSelection(option);\" *ngFor=\"let option of filteredItems\">{{option.value}}</li> </ul> </div> </div>",
                styles: [".autocomplete.container { float: left;  } .autocomplete .wrapper-box { border: 1px solid #e0e0e0; min-width: 250px; min-height: 15px; float: left; padding: 4px; } .autocomplete .text-box, .autocomplete .text-box:focus { border: 0; width: auto; height: 15px; resize: none; text-align:left; background-color: #ffffff; outline: none; padding-top: 4px; } .autocomplete .single-item-wrapper { padding-right: 2px; display: inline-block; float: left; } .autocomplete .single-item { font-size: 12px; color: #000000; margin-left: 3px; display: inline-block; padding: 3px; background: #e0e0e0; border-radius: 4px; border:1px solid #cccccc; } .autocomplete .single-item:hover { background: #cccccc; } .autocomplete .single-item .close { float: right; width: 10px; padding-left: 3px; font-weight: bold; cursor: pointer; } .autocomplete .list-wrapper { float: left; clear: left; } .autocomplete .list { margin: 0; padding: 0; list-style-type: none; border: 1px solid #cccccc; position: absolute; min-width: 269px; max-height: 300px; overflow: auto; } .autocomplete .list li { padding-left: 3px; padding-bottom: 5px; padding-top: 3px; border-bottom: 1px solid #cccccc; } .autocomplete .list li:hover { background: #e0e0e0; cursor: pointer; }"],
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/**
 * @nocollapse
 */
AutocompleteComponent.ctorParameters = function () { return []; };
AutocompleteComponent.propDecorators = {
    'onOptionSelection': [{ type: core.Output },],
    'options': [{ type: core.Input, args: ['options',] },],
};

var AutocompleteModule = (function () {
    function AutocompleteModule() {
    }
    return AutocompleteModule;
}());
AutocompleteModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    AutocompleteComponent
                ],
                exports: [
                    AutocompleteComponent
                ],
                imports: [
                    forms.FormsModule,
                    platformBrowser.BrowserModule
                ]
            },] },
];
/**
 * @nocollapse
 */
AutocompleteModule.ctorParameters = function () { return []; };

exports.AutocompleteModule = AutocompleteModule;
exports.AutocompleteComponent = AutocompleteComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
