import * as graphql from "@nestjs/graphql";
import { IngredientResolverBase } from "./base/ingredient.resolver.base";
import { Ingredient } from "./base/Ingredient";
import { IngredientService } from "./ingredient.service";

@graphql.Resolver(() => Ingredient)
export class IngredientResolver extends IngredientResolverBase {
  constructor(protected readonly service: IngredientService) {
    super(service);
  }
}
