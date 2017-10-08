import {IEmployee} from './Employee';
import {Injectable} from '@angular/core';


@Injectable(

)

export class DataService {
  getEmployees() : IEmployee[] {
    
    return [
            {
              "firstname" : "1",
  		        "lastname" : "Gopakumar",
  		        "email" : "arun.gopan@marlabs.com",
  		        "phone" : "34324324323",
  	          "current_class" : "10th"
  	        },
            {
              "firstname" : "2",
  		        "lastname" : "Gopakumar",
  		        "email" : "arun.gopan@marlabs.com",
  		        "phone" : "34324324323",
  	          "current_class" : "10th"
  	        },
            {
              "firstname" : "3",
  		        "lastname" : "Gopakumar",
  		        "email" : "arun.gopan@marlabs.com",
  		        "phone" : "34324324323",
  	          "current_class" : "10th"
  	        },
            {
              "firstname" : "4",
  		        "lastname" : "Gopakumar",
  		        "email" : "arun.gopan@marlabs.com",
  		        "phone" : "34324324323",
  	          "current_class" : "10th"
  	        },
            {
              "firstname" : "5",
  		        "lastname" : "Gopakumar",
  		        "email" : "arun.gopan@marlabs.com",
  		        "phone" : "34324324323",
  	          "current_class" : "10th"
  	        }
  ]
  }
}
