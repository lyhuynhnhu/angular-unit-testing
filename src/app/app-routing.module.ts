import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TempConverterComponent } from './temp-converter/temp-converter.component';
import { UsersComponent } from './users/users.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    children: [],
  },
  {
    path: 'components',
    children: [
      {
        path: 'basic',
        component: CounterComponent,
      },
      {
        path: 'dependency',
        component: UsersComponent,
      },
      {
        path: 'form',
        component: SignInComponent,
      },
    ],
  },
  {
    path: 'services',
    component: UsersComponent,
    children: [],
  },
  {
    path: 'pipes',
    component: TempConverterComponent,
    children: [],
  },
  {
    path: 'directives',
    component: UsersComponent,
    children: [],
  },
  {
    path: '**',
    component: NotFoundComponent,
    children: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
