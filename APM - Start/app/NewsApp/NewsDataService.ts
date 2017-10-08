import {IArticle} from './Article';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Response} from '@angular/http';

@Injectable()

export class NewsDataService {

constructor(private _http : Http){}

  getbbc() : Observable<IArticle[]> {
      return this._http.get('http://localhost:50254/api/values/getbbc').map((response : Response) => <IArticle[]>response.json());
  }

  getCnbc() : Observable<IArticle[]>{
    return this._http.get('http://localhost:50254/api/values/getcnbc').map((response : Response) => <IArticle[]>response.json());
  }

}
