import { createAction, props } from '@ngrx/store';
import { IUsers } from '../usermodel';

export const getUsersErrorMsg = '[User Component] GetUsers Error';
export const getUsersSuccessMsg = createAction(
  '[User Component] GetUsers',
  props<{ users: IUsers[] }>()
);
export const getUsers = '[User Component] GetUsers';

export const addUserErrorMsg = createAction(
  '[addUsers Component] addUser Error',
  props<{ error: Error }>()
);
export const addUserSuccessMsg = createAction(
  '[addUsers Component] addUser Success',
  props<{ user: IUsers }>()
);
export const addUser = '[addUsers Component] addUser';

export const selecteUserSuccessMsg = createAction(
  '[Users Component] selectUser ',
  props<{ id: number }>()
);

export const deleteUserErrorMsg = createAction(
  '[deleteUsers Component] deleteUser Error',
  props<{ error: Error }>()
);
export const deleteUserSuccessMsg = createAction(
  '[deleteUsers Component] deleteUser Success',
  props<{ id: number }>()
);
export const deleteUser = '[deleteUsers Component] deleteUser';

export const updateUserErrorMsg = createAction(
  '[updateUsers Component] updateUser Error',
  props<{ error: Error }>()
);
export const updateUserSuccessMsg = createAction(
  '[updateUsers Component] updateUser Success',
  props<{ user: IUsers }>()
);
export const updateUser = '[updateUsers Component] updateUser';
