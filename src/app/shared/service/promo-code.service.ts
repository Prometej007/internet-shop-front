import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MaterialsModel} from '../model/materials.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CategoryModel} from '../model/category.model';
import {PromocodeModel} from '../model/promocode.model';

/**
 * Created by internet-shop-front in company M-PLUS.
 * User: nazar
 * Date: 18.11.2018
 * Time: 17:10
 */
@Injectable()
export class PromoCodeService {


  private controller = '/promo-code';

  constructor(private _httpClient: HttpClient) {
  }

  create(callBack: PromocodeModel): Observable<any> {
    return this._httpClient.post(this.controller, JSON.stringify(callBack)).pipe(catchError(err => throwError(err)));
  }

  isPresent(code: string): Observable<any> {
    return this._httpClient.post(this.controller + '/is?code=' + code, null).pipe(catchError(err => throwError(err)));
  }

  findAll(limit: number, page: number): Observable<any> {
    return this._httpClient.get(this.controller, {params: new HttpParams().set('size', limit + '').set('page', page + '')}).pipe(catchError(err => throwError(err)));
  }
}
