import { Injectable } from '@angular/core';
import {HousingLocationInfo} from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  housingLocationList: HousingLocationInfo[] = [];

  getAllHousingLocations(): HousingLocationInfo[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocationInfo | undefined {
    return this.housingLocationList.find((housingLocation) => housingLocation.id === id);
  }

}
