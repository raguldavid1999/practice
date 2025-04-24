import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectList = createFeatureSelector<string[]>('lists');
export const getAllValue = createSelector(selectList, (list)=>list);