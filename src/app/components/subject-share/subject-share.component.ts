import { Component } from '@angular/core';
import { SubjectLearnService } from '../../services/subject-learn.service';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, delay, forkJoin, from, mergeMap, Observable, of, switchMap } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { Store } from '@ngrx/store';
import { adddata } from '../../list-ngrx/actions/sample.action';

@Component({
  selector: 'app-subject-share',
  imports: [RouterLink, ReactiveFormsModule, HeaderComponent],
  templateUrl: './subject-share.component.html',
  styleUrl: './subject-share.component.scss'
})
export class SubjectShareComponent {
  listofData:string[] = [];
  searchControl: FormControl= new FormControl('');
  fromObs$: Observable<unknown> = of(1, 2, 3)
  constructor(private subjectService: SubjectLearnService, private store: Store<{sample: string}>){
    this.listofData = this.subjectService.sampleList;
    let profileObs$ = this.store.select('sample');
    profileObs$.subscribe({
      next:(value)=>{
        this.searchControl.setValue(value);
      }
    })
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      switchMap(query=>this.fakeApiCall(query))
    ).subscribe({
      next:(data:any)=>{
        this.store.dispatch(adddata({data: this.searchControl.value}));
      }
    })
  }
  fakeApiCall(query: string) {
    console.log('API called with:', query);
    const allItems = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes'];
    const filtered = allItems.filter(item =>
      item.toLowerCase().includes(query.toLowerCase())
    );
    return of(filtered);
  }
  addValue(value:any){
    this.subjectService.sampleList.push(value);
  }
  changeName(){
    // forkJoin(
    //   this.fakeApi1(),
    //   this.fakeApi2(),
    //   this.fakeApi3(),
    // ).subscribe({
    //   next:([res1, res2, res3])=> {
    //     console.log('fork join completed', res1, res2, res3);
    //   },
    // })
    this.fromObs$.subscribe({
      next:(value:any)=>{
        console.log(value, 'from');
        
      }
    })
  }

  fakeApi1(){
    return of('API 1').pipe(delay(2000));
  }
  fakeApi2(){
    return of('API 2').pipe(delay(3000));
  }

  fakeApi3(){
    return of('API 3').pipe(delay(1000));
  }
}
