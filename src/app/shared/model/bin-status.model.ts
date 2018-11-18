import {BinModel} from "./bin.model";
import {BaseModel} from "./base-model";

export class BinStatusModel extends BaseModel {

  type: string;
  comment: string;
  bin: BinModel;

}
