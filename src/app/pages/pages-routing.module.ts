import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';


const routes: Routes = [
  {
    path: 'dashboard',
    component:PagesComponent,
    children: [
      { path: '', component: DashboardComponent  ,data: { title: 'Dashboard' } },
      { path: 'grafica1', component: Grafica1Component, data: { title: 'Gráfica' } },
      { path: 'progress', component: ProgressComponent ,data: { title: 'Progress' } },
      { path: 'account-settings', component: AccountSettingsComponent ,data: { title: 'Ajuste de cuenta' } },
      { path: 'promesas', component: PromesasComponent ,data: { title: 'Promesas' } },
      { path: 'rxjs', component: RxjsComponent ,data: { title: 'RxJs' } },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  },
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule { }
