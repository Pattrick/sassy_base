// import { Injectable } from '@angular/core';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';

// @Injectable()
// export class FirebaseService {
//   listings: FirebaseListObservable<any[]>;

//   constructor(private af:AngularFire) { }

//   getListings(){
//     this.listings = this.af.database.list('/listings') as FirebaseListObservable<Listing[]>
//     return this.listings;

//   }

// }

// interface Listing{
//   $key?:string;
//   title?:string;
//   doors?:string;
//   image?:string;
//   make?:string;
//   model?:string;
//   mpg?:string;
//   owner?:string;
//   price?:string;

// }