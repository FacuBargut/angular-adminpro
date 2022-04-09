import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Modulos
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { PagesComponent } from './pages.component';
import { RxjsComponent } from './rxjs/rxjs.component';




@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    NopagefoundComponent,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
  ],
  exports: [
    DashboardComponent,
    Grafica1Component,
    NopagefoundComponent,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent,
    PromesasComponent,
    RxjsComponent
  ]
})
export class PagesModule { }
