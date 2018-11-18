import {BaseModel} from "./base-model";
import {ProductModel} from "./product.model";

export class UserModel extends BaseModel{
  seeProducts:ProductModel[] = [];
  phone: string;
  firstName: string;
  lastName: string;
  middleName: string;
  email: string;
  password: string;
  isAccountNonLocked: boolean;
  isEnabled: boolean;
  uuid: string;
  city: string;
}
