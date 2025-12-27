import { Component } from '@angular/core';
import {HousingLocation} from '../housing-location/housing-location';
importa: [HousingLocation];


@Component({
  selector: 'app-home',
  imports: [],
  template: '<section>\n' +
    '      <form>\n' +
    '        <input type="text" placeholder="Filter by city" />\n' +
    '        <button class="primary" type="button">Search</button>\n' +
    '      </form>\n' +
    '    </section>\n' +
    '    <section class="results">\n' +
    '      <app-housing-location />\n' +
    '    </section>',
  styleUrl: './home.css',
})
export class Home {

}
