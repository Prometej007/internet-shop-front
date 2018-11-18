import {ImageModel} from "./image.model";
import {DictionaryModel} from "./dictionary.model";
import {BaseModel} from "./base-model";

export class CategoryModel extends BaseModel {

  image: ImageModel;
  order: number;
  name: DictionaryModel;
  description: DictionaryModel;
  product: string;

}
