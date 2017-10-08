import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product-filter';
import {Http, Response} from '@angular/Http';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'product-list',
    templateUrl: 'app/products/product-list.html',
    styles: ['thead { color:#FF0000;}'],
    providers: [ProductService]
})

export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    showImage: boolean = false;
    listFilter: string = "Garden Cart";
    products: IProduct[];
    constructor(private _productService: ProductService) {
        /** this.products = this._productService.getProducts(); */
        this._productService.getProducts().subscribe(data =>this.products = data);
    }
    toogleImage(): void {
        this.showImage = !this.showImage;
    }
    ngOnInit(): void {
        console.log('Product list component initialized');
    }
    parentEventFn(msg:string) : void {
      alert(msg);
    }
}
