import { createAction, props } from "@ngrx/store";

export const addList = createAction('[List] Add', props<{value: string}>());