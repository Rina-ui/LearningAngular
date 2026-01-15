import { Component, input } from '@angular/core';
import {HousingLocationInfo} from '../housinglocation';

@Component({
  selector: 'app-housing-location',
  imports: [],
  template: '<section class="listing">\n' +
    '      <img\n' +
    '        class="listing-photo"\n' +
    '        [src]="housingLocation().photo"\n' +
    '        alt="Exterior photo of {{ housingLocation().name }}"\n' +
    '        crossorigin\n' +
    '      />\n' +
    '      <h2 class="listing-heading">{{ housingLocation().name }}</h2>\n' +
    '      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>\n' +
    '    </section>',
  styleUrl: './housing-location.css',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>()
}
