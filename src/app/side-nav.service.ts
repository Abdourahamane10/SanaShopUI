import { Injectable } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private sideNav?: MatSidenav;

  constructor() { }

  setSideNav(sideNav: MatSidenav) {
    console.log('✅ Sidenav enregistré dans le service', sideNav);
    this.sideNav = sideNav;
  }

  toggle() {
     if (!this.sideNav) {
       console.warn('⚠️ Aucun sidenav enregistré dans le service');
       return;
     }
     console.log('✅ Toggle exécuté');
     this.sideNav.toggle();
  }
}
