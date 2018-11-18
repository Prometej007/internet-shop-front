import {DictionaryModel} from "./dictionary.model";
import {ImageModel} from "./image.model";
import {BaseModel} from "./base-model";

export class MaterialsModel extends BaseModel{

  name: DictionaryModel;
  description: DictionaryModel;
  image: ImageModel;

}
