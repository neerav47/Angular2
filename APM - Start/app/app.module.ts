import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { SampleComponent } from './Sample/app.SampleComponent';
import { ProductListComponent } from './products/product-list';
import { ProductFilterPipe } from './products/product-filter';
import {EmployeeComponent } from './Employee/EmployeeDataService/EmployeeComponent';
import {StarComponent} from './shared/starComponent';
import {EmployeeDetails} from './Employee/EmployeeDataService/EmployeeDetailComponent';
import {NewsComponent} from './NewsApp/NewsComponent';
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetail} from './products/ProductDetail';
import {LoginComponent} from './Project/LoginComponent';
import {HomeComponent} from './Project/HomeComponent';
import {RegisterComponent} from './Project/Services/RegisterComponent';
import  {ProfileComponent} from './Project/Profile/ProfileComponent';
import {MessageComponent} from './Project/Messages/MessageComponent';
import {ComposeComponent} from './Project/Messages/ComposeComponent';
import {InboxComponent} from './Project/Messages/InboxComponent';
import {MessageDetailComponent} from './Project/Messages/MessageDetailComponent';

@NgModule({
    imports: [BrowserModule,
              FormsModule,
              HttpModule,
              RouterModule.forRoot([
                {path : 'Products', component :ProductListComponent},
                {path : 'Employees', component : EmployeeComponent},
                {path : 'Employees/:id', component : EmployeeDetails},
                {path : 'News',component : NewsComponent},
                {path : 'Welcome',component : WelcomeComponent},
                {path : 'Login',component : LoginComponent},
                {path : 'Home', component : HomeComponent},
                {path : 'Register',component : RegisterComponent},
                {path :'Profile', component : ProfileComponent},
                {path : 'Messages', component : MessageComponent},
                {path : 'Compose', component : ComposeComponent},
                {path : 'Inbox', component : InboxComponent},
                {path :'MessageDetail/:id',component : MessageDetailComponent},
                {path : 'ProductDetail/:productId/:ProductName',component : ProductDetail},
                {path:'', redirectTo:'Welcome', pathMatch:'full'}
              ])
            ],
    declarations: [AppComponent, ProductListComponent, ProductFilterPipe,SampleComponent,EmployeeComponent,StarComponent,EmployeeDetails
      ,NewsComponent,WelcomeComponent,ProductDetail,ProductDetail,LoginComponent,HomeComponent,RegisterComponent,
      ProfileComponent,MessageComponent,ComposeComponent,InboxComponent,MessageDetailComponent],
  bootstrap: [ AppComponent]
})
export class AppModule { }
