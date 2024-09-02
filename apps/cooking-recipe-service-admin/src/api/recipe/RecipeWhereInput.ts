import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IngredientWhereUniqueInput } from "../ingredient/IngredientWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeWhereInput = {
  category?: CategoryWhereUniqueInput;
  description?: StringNullableFilter;
  id?: StringFilter;
  ingredient?: IngredientWhereUniqueInput;
  instructions?: StringNullableFilter;
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
