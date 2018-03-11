# autocompmodule

## Installation

To install this library, run:

```bash
$ npm install autocomplete-module --save
```
and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { AutocompleteModule } from 'autocomplete-module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify your library as an import
    AutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

and then from your `AppComponent`

```typescript
import { Component } from '@angular/core';
import { AutocompleteComponent } from './modules/autocomplete';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  options: any;

  constructor() {
    /**
     * This is how you input the options to Autocomplete
    */
    this.options = [
      {
        name: 'ny',
        value: 'New York'
      },
      {
        name: 'nyc',
        value: 'New Jersy'
      }
    ];
  }
  onOptionSelection(selectOptions) {
  }
}



Once the module is imported, you can use this component in your Angular application:

```html
<autocomplete [options]="options" (onOptionSelection)="onOptionSelection()"></autocomplete>
```

## License

MIT © [Sudhakar Pilavadi](mailto:sudhakarsp06@gmail.com)
