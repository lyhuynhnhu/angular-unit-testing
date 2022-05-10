import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: 'components',
    children: [
      {
        path: 'dependencies',
        component: UsersComponent,
      },
    ],
  },
  {
    path: 'services',
    component: UsersComponent,
    children: [],
  },
  {
    path: '**',
    component: WelcomeComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
