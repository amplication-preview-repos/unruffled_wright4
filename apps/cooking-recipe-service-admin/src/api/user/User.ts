import { Recipe } from "../recipe/Recipe";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  recipes?: Array<Recipe>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
