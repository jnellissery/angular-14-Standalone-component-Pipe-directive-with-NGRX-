import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UsersState } from "./user.reducer";

export const selectUsers =
  createFeatureSelector<UsersState>("users");

export const usersSelector = createSelector(
  selectUsers,
  (state: UsersState) => state.allUsers
);
export const currentuserSelector = createSelector(
  selectUsers,
  (state: UsersState) => state.selecteduser
);