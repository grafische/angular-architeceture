import { DepartmentOwn } from './../../core/model/department-own.model'; //, DepartmentOwnItem, DepartmentOwnYears
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap, concatMap, first } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDepartmentOwnService {

  private readonly apiUrlBase: string = environment.apiUrlBase;

  constructor( private http: HttpClient ) { }

  getDepartmentOwns(id: number) {
    return this.http.get<DepartmentOwn[]>(`${this.apiUrlBase}api/leave/employee/${id}`).pipe(
      map( val => {
            val.forEach( (arr, idx) => {
              arr.years = new Date(arr.startDate).getFullYear();
            } );
            return val;
          })
    );
    // return this.http.get<DepartmentOwnItem[]>(`${this.apiUrlBase}api/leave/own?employeeId=${id}`).pipe(
    //   map( val => {
    //     val.forEach( (arr, idx) => {
    //       arr.years = new Date(arr.startDate).getFullYear();
    //     } );

    //     // const group = val.reduce((r, a) => {
    //     //   r[a.years] = [...r[a.years] || [], a];
    //     //   return r;
    //     //  }, {});

    //     //  console.info(group);


    //     return val;
    //   } ),
    //   tap( val => {
    //     console.info(val);
    //   }),
    //   first(),
    //   concatMap( val => of(val).pipe(
    //     map( val => {
    //       const arrDepartmentOwnsYears: DepartmentOwnYears[] = [];
    //       const arrDepartmentOwns: DepartmentOwn[] = [];
    //       const group: DepartmentOwnItem = val.reduce((r, a) => {
    //         // const arrDepartmentOwn: DepartmentOwn = {
    //         //   years: a.years,
    //         //   listLeave: [...r[a.years] || [], a]
    //         // };
    //         r[a.years] = [...r[a.years] || [], a];
    //         // arrDepartmentOwn.years = a.years;
    //         // arrDepartmentOwn.listLeave = [...r[a.years] || [], a];
    //         //arrDepartmentOwns.push(arrDepartmentOwn);
    //         arrDepartmentOwnsYears[a.years] =  [...r[a.years] || [], a];
    //         //console.info(r[a.years]);
    //         return r;
    //        });

    //       arrDepartmentOwnsYears.forEach( (val, idx) => {
    //         console.info('Object.keys(val)' + idx);
    //         console.info(val);
    //         arrDepartmentOwns.push({
    //           years: idx,
    //           data: val
    //         })
    //        })
    //         //const arrGroup: DepartmentOwn[] = [].push(group);
    //       //  arrGroup.push(group);

    //       //  //const arrDepartmentOwn: DepartmentOwn[] = [];
    //       //  //arrDepartmentOwn.
    //       //  console.info('arrGroup');
    //       //  console.info(arrGroup);

    //       console.info('arrGroup DS');
    //       console.info(arrDepartmentOwns);
    //       return  arrDepartmentOwns;
    //     } )
    //   ) )
    // );
  }
}


