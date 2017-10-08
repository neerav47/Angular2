import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Pipe({
    name : 'productFilter'

})
export class ProductFilterPipe implements PipeTransform {
    transform(value: IProduct[], filterBy: string): IProduct[] {
        return filterBy ? value.filter(function (items) {
            if (items.productName.toLowerCase().indexOf(filterBy.toLowerCase()) != -1) {
                return value;
            }
        }) : value;
    }
}

@Injectable()

export class ProductService {
  constructor(private _http : Http){

  }
  getProducts(): Observable<IProduct[]> {
        return this._http.get('api/products/products.json').map((response : Response) => <IProduct[]>response.json());
  }
}
