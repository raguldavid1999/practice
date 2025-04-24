import { createReducer, on } from "@ngrx/store";
import * as ListActions from '../actions/list.action';

export const lists:string[] = []; 

export const listReducer = createReducer(
    lists,
    on(ListActions.addList, (state, {value})=>{
        return [...state, value]
    })
)