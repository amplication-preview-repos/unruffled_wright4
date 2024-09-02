import { SortOrder } from "../../util/SortOrder";

export type IngredientOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  quantity?: SortOrder;
  unit?: SortOrder;
  updatedAt?: SortOrder;
};
