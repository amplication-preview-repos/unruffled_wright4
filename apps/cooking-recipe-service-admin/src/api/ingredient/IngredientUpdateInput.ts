import { RecipeUpdateManyWithoutIngredientsInput } from "./RecipeUpdateManyWithoutIngredientsInput";

export type IngredientUpdateInput = {
  name?: string | null;
  quantity?: number | null;
  recipes?: RecipeUpdateManyWithoutIngredientsInput;
  unit?: string | null;
};
