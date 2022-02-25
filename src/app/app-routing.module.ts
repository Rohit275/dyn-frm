import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { CreateFormComponent } from './components/create-form/create-form.component';
import { GenerateFormComponent } from './components/generate-form/generate-form.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
  {
    path: 'user/:id',
    component: HomeLayoutComponent,
    children: [
      { path: 'create', component: CreateFormComponent },
      { path: 'view', component: GenerateFormComponent },
    ],
  },
  // { path: 'logged', component: HomeComponent },
  // { path: 'create', component: CreateFormComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
