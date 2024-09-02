import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { IngredientWhereUniqueInput } from "../ingredient/IngredientWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type RecipeCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  ingredient?: IngredientWhereUniqueInput | null;
  instructions?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
