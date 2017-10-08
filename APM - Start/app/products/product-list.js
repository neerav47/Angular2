"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var product_filter_1 = require("./product-filter");
var ProductListComponent = (function () {
    function ProductListComponent(_productService) {
        var _this = this;
        this._productService = _productService;
        this.pageTitle = 'Product List';
        this.showImage = false;
        this.listFilter = "Garden Cart";
        /** this.products = this._productService.getProducts(); */
        this._productService.getProducts().subscribe(function (data) { return _this.products = data; });
    }
    ProductListComponent.prototype.toogleImage = function () {
        this.showImage = !this.showImage;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        console.log('Product list component initialized');
    };
    ProductListComponent.prototype.parentEventFn = function (msg) {
        alert(msg);
    };
    return ProductListComponent;
}());
ProductListComponent = __decorate([
    core_1.Component({
        selector: 'product-list',
        templateUrl: 'app/products/product-list.html',
        styles: ['thead { color:#FF0000;}'],
        providers: [product_filter_1.ProductService]
    }),
    __metadata("design:paramtypes", [product_filter_1.ProductService])
], ProductListComponent);
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.js.map