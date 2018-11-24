import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MaterialsModel} from '../model/materials.model';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

/**
 * Created by internet-shop-front in company M-PLUS.
 * User: nazar
 * Date: 18.11.2018
 * Time: 17:10
 */
@Injectable()
export class MaterialService{

  private controller = '/material';

  constructor(private _httpClient: HttpClient) {
  }

  create(callBack: MaterialsModel): Observable<any> {
    return this._httpClient.post(this.controller, JSON.stringify(callBack)).pipe(catchError(err => Observable.throw(err)));
  }
  findAll(limit:number,page:number): Observable<any> {
    return this._httpClient.get(this.controller,{params: new HttpParams().set('size', limit + '').set('page', page + '')}).pipe(catchError(err => Observable.throw(err)));
  }
  findAllActive(limit:number,page:number): Observable<any> {
    return this._httpClient.get(this.controller+"/active",{params: new HttpParams().set('size', limit + '').set('page', page + '')}).pipe(catchError(err => Observable.throw(err)));
  }
}
