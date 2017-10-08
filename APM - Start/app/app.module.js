"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var app_SampleComponent_1 = require("./Sample/app.SampleComponent");
var product_list_1 = require("./products/product-list");
var product_filter_1 = require("./products/product-filter");
var EmployeeComponent_1 = require("./Employee/EmployeeDataService/EmployeeComponent");
var starComponent_1 = require("./shared/starComponent");
var EmployeeDetailComponent_1 = require("./Employee/EmployeeDataService/EmployeeDetailComponent");
var NewsComponent_1 = require("./NewsApp/NewsComponent");
var welcome_component_1 = require("./home/welcome.component");
var ProductDetail_1 = require("./products/ProductDetail");
var LoginComponent_1 = require("./Project/LoginComponent");
var HomeComponent_1 = require("./Project/HomeComponent");
var RegisterComponent_1 = require("./Project/Services/RegisterComponent");
var ProfileComponent_1 = require("./Project/Profile/ProfileComponent");
var MessageComponent_1 = require("./Project/Messages/MessageComponent");
var ComposeComponent_1 = require("./Project/Messages/ComposeComponent");
var InboxComponent_1 = require("./Project/Messages/InboxComponent");
var MessageDetailComponent_1 = require("./Project/Messages/MessageDetailComponent");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                { path: 'Products', component: product_list_1.ProductListComponent },
                { path: 'Employees', component: EmployeeComponent_1.EmployeeComponent },
                { path: 'Employees/:id', component: EmployeeDetailComponent_1.EmployeeDetails },
                { path: 'News', component: NewsComponent_1.NewsComponent },
                { path: 'Welcome', component: welcome_component_1.WelcomeComponent },
                { path: 'Login', component: LoginComponent_1.LoginComponent },
                { path: 'Home', component: HomeComponent_1.HomeComponent },
                { path: 'Register', component: RegisterComponent_1.RegisterComponent },
                { path: 'Profile', component: ProfileComponent_1.ProfileComponent },
                { path: 'Messages', component: MessageComponent_1.MessageComponent },
                { path: 'Compose', component: ComposeComponent_1.ComposeComponent },
                { path: 'Inbox', component: InboxComponent_1.InboxComponent },
                { path: 'MessageDetail/:id', component: MessageDetailComponent_1.MessageDetailComponent },
                { path: 'ProductDetail/:productId/:ProductName', component: ProductDetail_1.ProductDetail },
                { path: '', redirectTo: 'Welcome', pathMatch: 'full' }
            ])
        ],
        declarations: [app_component_1.AppComponent, product_list_1.ProductListComponent, product_filter_1.ProductFilterPipe, app_SampleComponent_1.SampleComponent, EmployeeComponent_1.EmployeeComponent, starComponent_1.StarComponent, EmployeeDetailComponent_1.EmployeeDetails,
            NewsComponent_1.NewsComponent, welcome_component_1.WelcomeComponent, ProductDetail_1.ProductDetail, ProductDetail_1.ProductDetail, LoginComponent_1.LoginComponent, HomeComponent_1.HomeComponent, RegisterComponent_1.RegisterComponent,
            ProfileComponent_1.ProfileComponent, MessageComponent_1.MessageComponent, ComposeComponent_1.ComposeComponent, InboxComponent_1.InboxComponent, MessageDetailComponent_1.MessageDetailComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map