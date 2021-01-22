import { IUser } from './../pages/admin/admin.interface';

export interface AppState {
  readonly users: IUser[];
}
