import { Routes } from '@angular/router';

export const routes: Routes = [
  //Layout principal
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layout/main-layout/side-nav/side-nav.component').then(
        (m) => m.SideNavComponent,
      ),
  },
];
