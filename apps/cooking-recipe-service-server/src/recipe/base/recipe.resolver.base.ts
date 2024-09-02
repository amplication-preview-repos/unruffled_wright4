/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Recipe } from "./Recipe";
import { RecipeCountArgs } from "./RecipeCountArgs";
import { RecipeFindManyArgs } from "./RecipeFindManyArgs";
import { RecipeFindUniqueArgs } from "./RecipeFindUniqueArgs";
import { CreateRecipeArgs } from "./CreateRecipeArgs";
import { UpdateRecipeArgs } from "./UpdateRecipeArgs";
import { DeleteRecipeArgs } from "./DeleteRecipeArgs";
import { Category } from "../../category/base/Category";
import { Ingredient } from "../../ingredient/base/Ingredient";
import { User } from "../../user/base/User";
import { RecipeService } from "../recipe.service";
@graphql.Resolver(() => Recipe)
export class RecipeResolverBase {
  constructor(protected readonly service: RecipeService) {}

  async _recipesMeta(
    @graphql.Args() args: RecipeCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Recipe])
  async recipes(@graphql.Args() args: RecipeFindManyArgs): Promise<Recipe[]> {
    return this.service.recipes(args);
  }

  @graphql.Query(() => Recipe, { nullable: true })
  async recipe(
    @graphql.Args() args: RecipeFindUniqueArgs
  ): Promise<Recipe | null> {
    const result = await this.service.recipe(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Recipe)
  async createRecipe(@graphql.Args() args: CreateRecipeArgs): Promise<Recipe> {
    return await this.service.createRecipe({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,

        ingredient: args.data.ingredient
          ? {
              connect: args.data.ingredient,
            }
          : undefined,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Recipe)
  async updateRecipe(
    @graphql.Args() args: UpdateRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.updateRecipe({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,

          ingredient: args.data.ingredient
            ? {
                connect: args.data.ingredient,
              }
            : undefined,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Recipe)
  async deleteRecipe(
    @graphql.Args() args: DeleteRecipeArgs
  ): Promise<Recipe | null> {
    try {
      return await this.service.deleteRecipe(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  async getCategory(
    @graphql.Parent() parent: Recipe
  ): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Ingredient, {
    nullable: true,
    name: "ingredient",
  })
  async getIngredient(
    @graphql.Parent() parent: Recipe
  ): Promise<Ingredient | null> {
    const result = await this.service.getIngredient(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: Recipe): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => [Recipe])
  async GetRecipes(
    @graphql.Args()
    args: RecipeFindManyArgs[]
  ): Promise<Recipe[]> {
    return this.service.GetRecipes(args);
  }
}