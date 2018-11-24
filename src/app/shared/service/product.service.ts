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
export class ProductService {

  private controller = '/product';

  constructor(private _httpClient: HttpClient) {
  }

  create(callBack: ProductModel): Observable<any> {
    return this._httpClient.post(this.controller + '/save-product', JSON.stringify(callBack)).pipe(catchError(err => Observable.throw(err)));
  }
  findOne(productId: number): Observable<any> {
    return this._httpClient.get(this.controller + '/find-product?productId='+productId).pipe(catchError(err => Observable.throw(err)));
  }

  findAll(limit: number, page: number): Observable<any> {
    return this._httpClient.get(this.controller, {params: new HttpParams().set('size', limit + '').set('page', page + '')}).pipe(catchError(err => Observable.throw(err)));
  }

  changeAvailable(product: ProductModel) {
    return this._httpClient.post(this.controller + '/update-availability', null, {params: new HttpParams().set('productId', product.id + '').set('available', product.available + '')}).pipe(catchError(err => Observable.throw(err)));
  }

  filter(filter: HTMLFormElement, limit: number, page: number): Observable<any> {
    let form = new FormData(filter);
    return this._httpClient.post(this.controller + '/find-products-filter' +
      this.parseFormDate(form,
        ["category","materials","softness","productType","winterSummerOption","minPrice","maxPrice","minHeight","maxHeight","minWidth","maxWidth","minLength","maxLength","minMaximumLoad","maxMaximumLoad"]
      )
      , null,{params: new HttpParams().set('size', limit + '').set('page', page + '')}).pipe(catchError(err => Observable.throw(err)));
  }



  private parseFormDate(formDate: FormData, name:string[]):string {
    let s="?";
    name.forEach(
      value =>
        s+=this.formDate(formDate,value)
    );
    return s;
  }
  private formDate(formDate: FormData, name: string):string {
    let s = '';
    formDate.getAll(name).forEach(value => {
      s += name + '=' + value + '&';
    });
    return s;
  }

}
