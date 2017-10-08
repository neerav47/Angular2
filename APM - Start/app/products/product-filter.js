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
var core_2 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ProductFilterPipe = (function () {
    function ProductFilterPipe() {
    }
    ProductFilterPipe.prototype.transform = function (value, filterBy) {
        return filterBy ? value.filter(function (items) {
            if (items.productName.toLowerCase().indexOf(filterBy.toLowerCase()) != -1) {
                return value;
            }
        }) : value;
    };
    return ProductFilterPipe;
}());
ProductFilterPipe = __decorate([
    core_1.Pipe({
        name: 'productFilter'
    })
], ProductFilterPipe);
exports.ProductFilterPipe = ProductFilterPipe;
var ProductService = (function () {
    function ProductService(_http) {
        this._http = _http;
    }
    ProductService.prototype.getProducts = function () {
        return this._http.get('api/products/products.json').map(function (response) { return response.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    core_2.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product-filter.js.map