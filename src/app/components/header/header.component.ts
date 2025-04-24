import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  profileObs$: Observable<unknown>;
  profileName: string='';
  constructor(private store: Store<{sample: string}>){
    this.profileObs$ = this.store.select('sample');
    this.profileObs$.subscribe({
      next:(value:any)=>{
        this.profileName = value;
      }
    })
  }
}
