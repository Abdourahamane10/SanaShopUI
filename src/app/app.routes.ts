import { Routes } from '@angular/router';

export const routes: Routes = [
  //Layout principal
  {
    path: '',
    loadComponent: () =>
      import('./presentation/layout/main-layout/side-nav/side-nav.component').then(
        (m) => m.SideNavComponent,
      ),
    children: [
      //redirection racine
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./presentation/features/dashboard/dashboard.routes').then(
            (m) => m.routes,
          ),
      },
    ],
  },

  //Layout auth

  //Page 404
  {
    path: '**',
    redirectTo: 'notfound',
  },
];
