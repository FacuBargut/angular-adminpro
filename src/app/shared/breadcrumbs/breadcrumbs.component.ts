import { Component, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy {

  public title: string;
  public tituloSubs$: Subscription;

  constructor( private router: Router) { 
  }

  
  ngOnDestroy(): void {
    this.tituloSubs$.unsubscribe();
  }


  getArgumentosRuta() {
    return this.router.events
    .pipe(
      filter( event => event instanceof ActivationEnd ),
      filter( (event: ActivationEnd) => event.snapshot.firstChild === null ),
      map( (event: ActivationEnd) => event.snapshot.data )
    )
  }


  ngOnInit(): void {
    this.tituloSubs$ = this.getArgumentosRuta()
                           .subscribe( ({ title }) => {
                              this.title = title;
                              document.title = `AdminPro - ${ title }`;
                            })
  }

}
