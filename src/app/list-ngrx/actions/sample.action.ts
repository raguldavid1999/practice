import { createAction, props } from "@ngrx/store";

export const adddata = createAction('[Add Data]', props<{data: string}>());