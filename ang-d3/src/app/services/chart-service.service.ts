import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { ISalesData } from '../shared/model/sales-data.model';

@Injectable({
  providedIn: 'root'
})
export class ChartServiceService {

  constructor(private httpClient: HttpClient) { }

  getSalesData(): Observable<Array<ISalesData>> {
    return this.httpClient.get<Array<ISalesData>>('../../assets/sales-data.json');
  }
}
