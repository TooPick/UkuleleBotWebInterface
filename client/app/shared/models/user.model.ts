import {BaseModel} from './base.model';

export class User extends BaseModel {
  username?: string;
  email?: string;
  role?: string;
  password?: string;
}
