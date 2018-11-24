import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MaterialsModel} from '../model/materials.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CategoryModel} from '../model/category.model';
import {BinModel} from '../model/bin.model';

/**
 * Created by internet-shop-front in company M-PLUS.
 * User: nazar
 * Date: 18.11.2018
 * Time: 17:10
 */
@Injectable()
export class BinService{

  private controller = '/bin';

  constructor(private _httpClient: HttpClient) {
  }

  price(bin:BinModel): Observable<any> {
    return this._httpClient.post(this.controller+"/price",JSON.stringify(bin)).pipe(catchError(err => throwError(err)));
  }
  buy(bin:BinModel): Observable<any> {
    return this._httpClient.post(this.controller+"/buy",JSON.stringify(bin)).pipe(catchError(err => throwError(err)));
  }
}
