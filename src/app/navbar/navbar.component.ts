import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavBarComponent implements OnInit {

  loading: boolean;
  navbarOpen = false;

  constructor(
    // private loaderService: LoaderService
    ) {

    /*
    this.loaderService.isLoading.subscribe((v) => {
      console.log(v);
      this.loading = v;
    });

    */

  }
  ngOnInit() {
  }

  

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}