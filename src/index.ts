import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AutocompleteComponent } from './autocomplete.component';

export * from './autocomplete.component';

@NgModule({
  declarations: [
    AutocompleteComponent
  ],
  exports: [
      AutocompleteComponent
  ],
  imports: [
    FormsModule,
    BrowserModule
  ]
})
export class AutocompleteModule { }
