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
export class BinService {

  private controller = '/bin';

  constructor(private _httpClient: HttpClient) {
  }

  price(bin: BinModel): Observable<any> {
    return this._httpClient.post(this.controller + '/price', JSON.stringify(bin)).pipe(catchError(err => throwError(err)));
  }

  buy(bin: BinModel): Observable<any> {
    return this._httpClient.post(this.controller + '/buy', JSON.stringify(bin)).pipe(catchError(err => throwError(err)));
  }

  filter(formDate: FormData, size: number, page: number): Observable<any> {
    return this._httpClient.get(this.controller + '/filter' + this.parseFormDate(formDate, ['type']) + 'size=' + size + 'page=' + page).pipe(catchError(err => throwError(err)));
  }

  findOne(id: number): Observable<any> {
    return this._httpClient.get(this.controller + '/' + id).pipe(catchError(err => throwError(err)));
  }
  createNewStatus(idBin: number,binStatus:string,comment:string): Observable<any> {
    return this._httpClient.post(this.controller + '/add-new-status',null,{params: new HttpParams().set('comment', comment + '').set('id', idBin + '').set('type', binStatus + '')}).pipe(catchError(err => throwError(err)));
  }

  private parseFormDate(formDate: FormData, name: string[]): string {
    let s = '?';
    name.forEach(
      value =>
        s += this.formDate(formDate, value)
    );
    return s;
  }

  private formDate(formDate: FormData, name: string): string {
    let s = '';
    formDate.getAll(name).forEach(value => {
      s += name + '=' + value + '&';
    });
    return s;
  }
}
