import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Gráficas', url: 'grafica1'},
        { title: 'Principal', url: ''},
        { title: 'ProgressBar', url: 'progress'},
        { title: 'Promesas', url: 'promesas'},
        { title: 'Rxjs', url: 'rxjs'},
      ]
    }
  ]


  constructor() { }
}
