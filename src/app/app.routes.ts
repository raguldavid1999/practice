import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { MyNgrxComponent } from './components/my-ngrx/my-ngrx.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent: ()=>import('./components/ag-grid-learn/ag-grid-learn.component').then(m=>m.AgGridLearnComponent)
    },
    {
        path: 'subject-share',
        loadComponent: ()=>import('./components/subject-share/subject-share.component').then(m=>m.SubjectShareComponent)
    },
    {
        path: 'my-ngrx',
        loadComponent: ()=>import('./components/my-ngrx/my-ngrx.component').then(m=>m.MyNgrxComponent)
    },
    {
        path:'redirect',
        loadComponent: ()=>import('./components/redirect/redirect.component').then(m=>m.RedirectComponent)
    },
    {
        path:'unused',
        loadComponent: ()=>import('./components/unused/unused.component').then(m=>m.UnusedComponent)
    }
];
