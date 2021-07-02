import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';


@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page {


  constructor(private authService: AuthenticationService, private router: Router) { }

     async orange() {
    await this.authService.orange();
    this.router.navigateByUrl('orange', { replaceUrl: true });
  }
}
