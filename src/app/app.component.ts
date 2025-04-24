import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as listActions from './list-ngrx/actions/list.action';
import * as listSelectors from './list-ngrx/selectors/list.selector';
import { Observable, of } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  allList$: Observable<string[]>;
  constructor(private store: Store){
    this.allList$ = this.store.select(listSelectors.getAllValue);    
  }
  title = 'practice';
  newValue:string = "";  

  onSubmit(){
    this.store.dispatch(listActions.addList({value: this.newValue.trim()}));
    this.newValue = "";
  }
}
