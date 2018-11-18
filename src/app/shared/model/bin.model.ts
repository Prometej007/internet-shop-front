import {BaseModel} from "./base-model";
import {UserModel} from "./user.model";
import {PromocodeModel} from "./promocode.model";
import {BinStatusModel} from "./bin-status.model";
import {ItemBinModel} from "./item-bin.model";

export class BinModel extends BaseModel{

  itemBins: ItemBinModel[] = [];
  user: UserModel;
  order: string;
  price: number;
  discount: number;
  comment: string;
  statuses: BinStatusModel[] = [];
  city: string;
  address: string;
  promoCode: PromocodeModel;

}
