import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RecipeListRelationFilter } from "../recipe/RecipeListRelationFilter";

export type IngredientWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  quantity?: FloatNullableFilter;
  recipes?: RecipeListRelationFilter;
  unit?: StringNullableFilter;
};
