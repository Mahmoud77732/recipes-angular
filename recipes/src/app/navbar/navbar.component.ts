import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  showMenuItem : boolean = true;

  constructor(private router : Router){
    let token = localStorage.getItem("token");
    if(token){
      this.showMenuItem = true;
    }
    else{
      this.showMenuItem = false;
    }
  }

  logout(){
    localStorage.removeItem("token");
    this.router.navigateByUrl("/login");
  }


}
