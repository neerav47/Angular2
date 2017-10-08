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
var NewsDataService_1 = require("./NewsDataService");
var NewsComponent = (function () {
    function NewsComponent(_newsDataService) {
        var _this = this;
        this._newsDataService = _newsDataService;
        this._newsDataService.getbbc().subscribe(function (data) {
            _this.Articles = data;
            _this.source = "BBC";
        });
    }
    NewsComponent.prototype.onBBC = function () {
        var _this = this;
        this._newsDataService.getbbc().subscribe(function (data) { return _this.Articles = data; });
        this.source = "BBC";
    };
    NewsComponent.prototype.onCnn = function () {
        var _this = this;
        this._newsDataService.getCnbc().subscribe(function (data) {
            _this.Articles = data;
            _this.source = "CNN";
        });
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    core_1.Component({
        templateUrl: 'app/NewsApp/News.html',
        providers: [NewsDataService_1.NewsDataService]
    }),
    __metadata("design:paramtypes", [NewsDataService_1.NewsDataService])
], NewsComponent);
exports.NewsComponent = NewsComponent;
//# sourceMappingURL=NewsComponent.js.map