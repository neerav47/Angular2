import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
       <h1>{{pageTitle}}</h1>,
      <nav class="navbar navbar-inverse">
      <div class="container-fluid">
      <div class="navbar-header">
      <a class="navbar-brand">Website Name</a>
      </div>
      <ul class="nav navbar-nav">
      <li><a routerLink="/Products">Products</a></li>
      <li><a routerLink="/Employees">Employees</a></li>
      <li><a routerLink="/News">News</a></li>
      <li><a routerLink="/Welcome">Welcome</a></li>
      <li><a routerLink="/Home">Home</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
      <li><a routerLink="/Register"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
      <li><a routerLink="/Login"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
      </ul>
      </div>
      </nav>
      <router-outlet></router-outlet>
        <router-outlet name='Message'></router-outlet>
    `})
export class AppComponent {
   pageTitle: string = "Angular-2.0 Training";
}
