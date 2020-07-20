import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppStoreModule { }



/*
http://localhost:8080/employeejson?id=2
{
"id": 2,
"department": {
"id": 1,
"name": "Zarząd",
"shortName": "Szefowie",
"symbol": "szefowie"
},
"creationDate": null,
"level": 0,
"login": "bozena",
"name": "Bożena",
"surname": "Szawlis",
"nickname": "",
"position": "Prezes i wiceprezes",
"room": "102",
"phone": "6144",
"mobilePhone": "502 427 545",
"homePhone": "",
"email": "Bozena.Szawlis@insert.com.pl",
"imAddress": "",
"birthday": null,
"namesday": null,
"extraInfo": "",
"former": false,
"phoneSocket": "",
"companyCars": [],
"superiors": [],
"url": ""
} */
