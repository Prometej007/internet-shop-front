import {BaseModel} from "./base-model";
import {ProductModel} from "./product.model";
import {BinModel} from "./bin.model";

export class PromocodeModel extends BaseModel{

  product: ProductModel[] = [];
  dateStart: string;
  dateEnd: string;
  maxCount: number;
  bins: BinModel[] = [];
  code: string;
  discount: number;
}
