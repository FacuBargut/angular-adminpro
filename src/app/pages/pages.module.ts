import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

//Componentes
import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { ProgressComponent } from './progress/progress.component';

//Modulos
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ComponentsModule } from '../components/components.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';


@NgModule({
  declarations: [
    DashboardComponent,
    Grafica1Component,
    NopagefoundComponent,
    ProgressComponent,
    PagesComponent,
    AccountSettingsComponent,
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
    AccountSettingsComponent
  ]
})
export class PagesModule { }
