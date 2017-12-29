import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class TableService {
  apiUrl = 'http://opentable.herokuapp.com/api/';
  constructor(private http: Http) {
  }
  addItemToTable(url, itemArr) {
    const headers = new Headers({'Content-Type' : 'application/json'});
    const options = new RequestOptions( {headers} );
    return this.http.post(this.apiUrl + url, itemArr, options)
      .map(res => {
      return res.json().data;
    });
  }
  removeItemFromTable(url, itemArr) {
    const headers = new Headers({'Content-Type' : 'application/json'});
    const options = new RequestOptions( {headers} );
    return this.http.delete(this.apiUrl + url, options)
      .map(res => {
        return res.json().data;
      });
  }
  getTableList(url: string,
         query: string = null,
         count: number = null,
         offset: number = null,
         sort: string = null,
         order: string = null): Observable<any> {
    console.log(count, sort, query );
    const composedUrl = TableService.combineUrl(`${this.apiUrl}${url}`, query, count, offset, sort, order);

    return this.http.get(composedUrl)
      .map(res => res.json())
      .catch(this.handleErrorObservable);
  }
  getTableHeaders(tableEl: object): string [] {
    // TODO: mb need refactoring
    const headersArr = [];
    for(const tHeader in tableEl) {
      headersArr.push(tHeader);
    }
    return headersArr;
  }
  static combineUrl(url: string, query: string, count: number, offset: number, sort: string, order: string): string {
    let resUrl = `${url}?count=${count}&offset=${offset}`;
    if (query) resUrl += `&q=${query}`;
    if (sort) resUrl += `&sort=${sort}`;
    if (order) resUrl += `&order=${order}`;
    return resUrl;
  }
  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }


}
