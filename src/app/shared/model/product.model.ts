import {DictionaryModel} from './dictionary.model';
import {ImageModel} from './image.model';
import {CategoryModel} from './category.model';
import {MaterialsModel} from './materials.model';
import {BaseModel} from './base-model';

export type SoftnessType = 'SOFT' | 'MODERATELY_SOFT' | 'MIDDLE' | 'MODERATELY_HARD' | 'HARD';
export type ProductType = 'UNILATERAL' | 'DOUBLE_SIDED';

export class ProductModel extends BaseModel {

  name: DictionaryModel;
  description: DictionaryModel;
  image: ImageModel;
  category: CategoryModel;
  softnessTypes: SoftnessType[] = [];
  productType: ProductType;
  materials: MaterialsModel[] = [];
  model: string;
  height: number;
  width: number;
  length: number;
  maximumLoad: number;
  price: number;
  canBuy: boolean;
  news: boolean;
  winterSummerOption: boolean;

}
