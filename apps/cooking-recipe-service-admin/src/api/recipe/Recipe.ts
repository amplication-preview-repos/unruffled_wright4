import { Category } from "../category/Category";
import { Ingredient } from "../ingredient/Ingredient";
import { User } from "../user/User";

export type Recipe = {
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  ingredient?: Ingredient | null;
  instructions: string | null;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
