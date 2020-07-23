import { UserEffects } from './effects/user.effects';
import { DataUserService } from './services/data-user.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers } from './reducers/';
import * as reducerUser from './reducers/user.reducer';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(reducerUser.userFeatureKey, reducers.users),
    EffectsModule.forFeature([ UserEffects ])
  ],
  providers: [
    DataUserService
  ],
  exports: [StoreModule, EffectsModule]
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
