import { RecipeUpdateManyWithoutUsersInput } from "./RecipeUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  recipes?: RecipeUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
