import {DictionaryModel} from "./dictionary.model";
import {ImageModel} from "./image.model";
import {CategoryModel} from "./category.model";
import {MaterialsModel} from "./materials.model";
import {BaseModel} from "./base-model";

export class ProductModel extends BaseModel{

  name: DictionaryModel;
  description: DictionaryModel;
  image: ImageModel;
  category: CategoryModel;
  softnessTypes: string;
  productType: string;
  materials: MaterialsModel[] = [];
  models: string;
  height: number;
  width: number;
  length: number;
  maximumLoad: number;
  price: number;
  canBuy: boolean;
  news: boolean;
  winterSummerOption: boolean;

}
