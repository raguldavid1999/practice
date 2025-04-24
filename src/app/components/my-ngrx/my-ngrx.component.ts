import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as listActions from '../../list-ngrx/actions/list.action';
import * as listSelectors from '../../list-ngrx/selectors/list.selector';
import { FormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-my-ngrx',
  imports: [FormsModule, AsyncPipe, RouterLink],
  templateUrl: './my-ngrx.component.html',
  styleUrl: './my-ngrx.component.scss'
})
export class MyNgrxComponent {
  allList$: Observable<string[]>;
    constructor(private store: Store){
      this.allList$ = this.store.select(listSelectors.getAllValue);    
    }
    title = 'practice';
    newValue:string = "";  
  
    onSubmit1(){
      this.store.dispatch(listActions.addList({value: this.newValue.trim()}));
      this.newValue = "";
    }

    treeShakeTest(){
      
    }
}
