import {ProductModel} from "./product.model";
import {BinModel} from "./bin.model";
import {BaseModel} from "./base-model";

export class ItemBinModel extends BaseModel{

  product: ProductModel;
  bin: BinModel;
  count: number;
  pricePerOne: number;

}
