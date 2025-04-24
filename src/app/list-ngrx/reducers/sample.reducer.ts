import { createReducer, on } from "@ngrx/store";
import { adddata } from "../actions/sample.action";

export const initialState:string = 'Ragul';

export const sampleReducer = createReducer(
    initialState,
    on(
        adddata, (state, action: { data: string; })=>{
            return action.data;
        }
    )
)
