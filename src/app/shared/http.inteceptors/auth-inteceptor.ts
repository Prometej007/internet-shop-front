import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Router} from '@angular/router';
import {isNull, isNullOrUndefined} from 'util';
import {isPlatformBrowser} from '@angular/common';
import {Observable, throwError} from 'rxjs';
import {url} from '../config/url';
import {catchError} from 'rxjs/operators';

// import {AppComponent} from "../../app/app.component";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
  }

  intercept<T>(req: HttpRequest<T>, next: HttpHandler): Observable<HttpEvent<T>> {
    // AppComponent._loadRxListner.startLoading();

    let headers;
    if (!isPlatformBrowser(this.platformId)) {
      headers = new HttpHeaders();
    } else {
      headers = this.getHeaders(req);
    }
    if (req.url.includes('http://') || req.url.includes('https://')) {
      req = req;
    } else {
      req = req.clone({headers, url: url + req.url});
    }
    return next.handle(req).pipe(catchError(err => {
      if (err.status === 401) {
        // if (isNullOrUndefined(localStorage.getItem("refresh_token"))) {
        //   return Observable.throw(err);
        // } else {
        //   if (isNullOrUndefined(localStorage.getItem("checkRefreshToken"))) {
        //     let authReq = new HttpRequest("POST", Url.url+"/oauth/token", {
        //       params: new HttpParams().append("refresh_token", localStorage.getItem("refresh_token"))
        //         .append("grant_type", "refresh_token").append("client_id", "clientapp").append("client_secret", "123456"),
        //     });
        //     localStorage.setItem("checkRefreshToken","true");
        //
        //     next.handle(authReq).catch((error) => {
        //       console.error(error);
        //       AppComponent._loadRxListner.endLoading();
        //       localStorage.removeItem("checkRefreshToken");
        //       console.log("-----------------error access token---------------------");
        //       this._userDetailsService.logout();
        //       this._router.navigateByUrl('/login');
        //       return Observable.throw(error);
        //     }).subscribe(
        //       nextRefresh => {
        //         console.log(nextRefresh);
        //         console.log(JSON.stringify(nextRefresh));
        //         this._userDetailsService.tokenParseInLocalStorage(nextRefresh);
        //         console.log("update");
        //         localStorage.removeItem("checkRefreshToken");
        //         console.log("-----------------reset access token---------------------");
        //         // return next.handle(req);
        //         // AppComponent._userDetailsService.tokenParseInLocalStorage(next);
        //       }, error => {
        //         console.error(error);
        //         AppComponent._loadRxListner.endLoading();
        //         localStorage.removeItem("checkRefreshToken");
        //         console.log("-----------------error access token---------------------");
        //         this._userDetailsService.logout();
        //         this._router.navigateByUrl('/login');
        //       })
        //   }else{
        //     AppComponent._loadRxListner.endLoading();
        //     return Observable.throw(err);
        //   }
        // }
        // AppComponent._loadRxListner.endLoading();
      }
      if (err.status === 403) {
        // this._router.navigateByUrl("/error/403");
        return throwError(err);
      } else {
        // AppComponent._loadRxListner.endLoading();
        return throwError(err);
      }
    }));
  }

  getHeaders(req: HttpRequest<any>): HttpHeaders {
    let authKey = '';
    let headers = new HttpHeaders();
    let temp: HttpRequest<any>;
    if (isNull(req.headers)) {
      temp = req.clone({headers});
    } else {
      temp = req.clone();
    }
    if (temp.headers.keys().indexOf('multipart') != -1 || temp.headers.keys().indexOf('enctype') != -1) {
      headers = headers.append('enctype', 'form-data/multipart');
    } else {
      if (!isNullOrUndefined(localStorage.getItem('access_token')) && localStorage.getItem('access_token') != '') {
        authKey = 'Bearer ' + localStorage.getItem('access_token');
      } else if (req.params.get('grant_type') != null) {
        authKey = 'Basic  dXNlci1jbGllbnQ6MTIzNDU2';
        if (temp.headers.keys().indexOf('Content-Type') != -1) {
          if (temp.headers.get('Content-Type').indexOf('application/x-www-form-urlencoded') == -1) {
            headers = headers.set('Content-Type', temp.headers.get('Content-Type') + ';application/x-www-form-urlencoded');
          }
          if (temp.headers.get('Content-Type').indexOf('application/json') == -1) {
            headers = headers.set('Content-Type', temp.headers.get('Content-Type') + ';application/json');
          }
        } else {
          headers = headers.append('Content-Type', 'application/x-www-form-urlencoded;application/json');
        }
      }
      if (headers.keys().indexOf('Content-Type') != -1) {
        if (headers.get('Content-Type').indexOf('application/json') == -1) {
          headers = headers.set('Content-Type', temp.headers.get('Content-Type') + ';application/json');
        }
      } else {
        headers = headers.append('Content-Type', 'application/json');
      }
      headers = headers.append('Authorization', authKey);
    }
    headers = headers.append('Accept', 'application/json');
    return headers;
  }
}
