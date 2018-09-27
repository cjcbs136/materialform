import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [

  // otherwise redirect to home
  { path: '**', redirectTo: 'local' }
];

export const routing = RouterModule.forRoot(appRoutes);
