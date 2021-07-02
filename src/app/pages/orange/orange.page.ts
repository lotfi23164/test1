import { Component, OnInit } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { StoreService } from './../../services/store.service';
import { AuthenticationService } from './../../services/authentication.service';




@Component({
  selector: 'app-orange',
  templateUrl: './orange.page.html',
  styleUrls: ['./orange.page.scss'],
})
export class OrangePage implements OnInit {
  searchTerm: string;
  storageKey: string = "recent_searches";
  recentSearches : any = [];

  constructor(
    private modalCtrl: ModalController,
    private store: StoreService,
    private router: Router,
    private authService: AuthenticationService,
  ) { 
    this.store.get(this.storageKey).then((result) => {
      console.log('result :>> ', result);
      if ( result ) {
        this.recentSearches = result;
      }
    }).catch((err) => {
      console.log('err :>> ', err);
    });
  }

ngOnInit() {
 }

dismiss() {
    this.modalCtrl.dismiss();
  }
  submit(term?: string) {
    
    if ( term ) {
      this.searchTerm = term;
    }

    console.log('searchTerm :>> ', this.searchTerm);

    if ( this.searchTerm && this.searchTerm.trim() ) {

      if ( !this.recentSearches.includes(this.searchTerm) ) {
        this.recentSearches.push(this.searchTerm);
        this.store.set(this.storageKey,  this.recentSearches)
      }


    }

    this.searchTerm = null; 
  }
  clearSearches() {
    this.recentSearches = [];
    this.store.remove(this.storageKey);
 }
  

}
