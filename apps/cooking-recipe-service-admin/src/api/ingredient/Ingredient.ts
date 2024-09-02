import { Recipe } from "../recipe/Recipe";

export type Ingredient = {
  createdAt: Date;
  id: string;
  name: string | null;
  quantity: number | null;
  recipes?: Array<Recipe>;
  unit: string | null;
  updatedAt: Date;
};
