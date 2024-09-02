/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Ingredient as PrismaIngredient,
  Recipe as PrismaRecipe,
} from "@prisma/client";
import { IngredientFindManyArgs } from "./IngredientFindManyArgs";
import { Ingredient } from "./Ingredient";

export class IngredientServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.IngredientCountArgs, "select">
  ): Promise<number> {
    return this.prisma.ingredient.count(args);
  }

  async ingredients(
    args: Prisma.IngredientFindManyArgs
  ): Promise<PrismaIngredient[]> {
    return this.prisma.ingredient.findMany(args);
  }
  async ingredient(
    args: Prisma.IngredientFindUniqueArgs
  ): Promise<PrismaIngredient | null> {
    return this.prisma.ingredient.findUnique(args);
  }
  async createIngredient(
    args: Prisma.IngredientCreateArgs
  ): Promise<PrismaIngredient> {
    return this.prisma.ingredient.create(args);
  }
  async updateIngredient(
    args: Prisma.IngredientUpdateArgs
  ): Promise<PrismaIngredient> {
    return this.prisma.ingredient.update(args);
  }
  async deleteIngredient(
    args: Prisma.IngredientDeleteArgs
  ): Promise<PrismaIngredient> {
    return this.prisma.ingredient.delete(args);
  }

  async findRecipes(
    parentId: string,
    args: Prisma.RecipeFindManyArgs
  ): Promise<PrismaRecipe[]> {
    return this.prisma.ingredient
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .recipes(args);
  }
  async GetIngredients(args: IngredientFindManyArgs[]): Promise<Ingredient[]> {
    throw new Error("Not implemented");
  }
}
