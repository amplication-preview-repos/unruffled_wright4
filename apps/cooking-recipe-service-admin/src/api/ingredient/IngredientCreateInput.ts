import { RecipeCreateNestedManyWithoutIngredientsInput } from "./RecipeCreateNestedManyWithoutIngredientsInput";

export type IngredientCreateInput = {
  name?: string | null;
  quantity?: number | null;
  recipes?: RecipeCreateNestedManyWithoutIngredientsInput;
  unit?: string | null;
};
