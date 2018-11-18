import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {MaterialsModel} from '../model/materials.model';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {CategoryModel} from '../model/category.model';
import {ProductModel} from '../model/product.model';

/**
 * Created by internet-shop-front in company M-PLUS.
 * User: nazar
 * Date: 18.11.2018
 * Time: 17:10
 */
@Injectable()
export class ProductService{

  private controller = '/product';

  constructor(private _httpClient: HttpClient) {
  }

  create(callBack: ProductModel): Observable<any> {
    return this._httpClient.post(this.controller+"/save-product", JSON.stringify(callBack)).pipe(catchError(err => Observable.throw(err)));
  }
  findAll(limit:number,page:number): Observable<any> {
    return this._httpClient.get(this.controller,{params: new HttpParams().set('limit', limit + '').set('page', page + '')}).pipe(catchError(err => Observable.throw(err)));
  }
}
