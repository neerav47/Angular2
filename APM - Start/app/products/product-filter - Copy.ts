import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product';

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