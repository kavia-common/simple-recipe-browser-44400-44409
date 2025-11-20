import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from '../models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private mockRecipes: Recipe[] = [
    {
      id: 1,
      title: 'Classic Tomato Bruschetta',
      description: 'A classic Italian appetizer, perfect for any occasion.',
      ingredients: [
        '4 ripe tomatoes, diced',
        '1 clove garlic, minced',
        '1/4 cup fresh basil, chopped',
        '1 tbsp olive oil',
        '1 baguette, sliced',
        'Salt and pepper to taste'
      ],
      steps: [
        'Preheat oven to 375°F (190°C).',
        'In a medium bowl, combine diced tomatoes, minced garlic, chopped basil, and olive oil.',
        'Season with salt and pepper to taste.',
        'Arrange baguette slices on a baking sheet.',
        'Toast in the preheated oven for 5-7 minutes, or until golden brown.',
        'Top the toasted bread with the tomato mixture and serve immediately.'
      ],
      imageUrl: 'assets/bruschetta.jpg',
      cookTime: 20,
      tags: ['appetizer', 'italian', 'vegetarian']
    },
    {
      id: 2,
      title: 'Spicy Thai Green Curry',
      description: 'A flavorful and aromatic Thai green curry with chicken.',
      ingredients: [
        '1 lb chicken breast, cut into bite-sized pieces',
        '2 tbsp green curry paste',
        '1 can (13.5 oz) coconut milk',
        '1 cup chicken broth',
        '1 red bell pepper, sliced',
        '1 cup bamboo shoots, drained',
        '1/4 cup fresh basil leaves',
        '1 tbsp fish sauce',
        '1 tsp sugar'
      ],
      steps: [
        'In a large pot or Dutch oven, heat 1/4 cup of coconut milk over medium heat.',
        'Add the green curry paste and cook until fragrant, about 1 minute.',
        'Add the chicken and cook until no longer pink.',
        'Stir in the remaining coconut milk and chicken broth. Bring to a simmer.',
        'Add the bell pepper and bamboo shoots. Cook for 5-7 minutes, or until vegetables are tender.',
        'Stir in the basil, fish sauce, and sugar.',
        'Serve hot with jasmine rice.'
      ],
      imageUrl: 'assets/green-curry.jpg',
      cookTime: 30,
      tags: ['main course', 'thai', 'spicy']
    },
    {
      id: 3,
      title: 'Chocolate Avocado Mousse',
      description: 'A surprisingly healthy and decadent-tasting dessert.',
      ingredients: [
        '2 ripe avocados',
        '1/2 cup unsweetened cocoa powder',
        '1/2 cup maple syrup or honey',
        '1/4 cup almond milk',
        '1 tsp vanilla extract',
        'A pinch of salt'
      ],
      steps: [
        'Combine all ingredients in a blender or food processor.',
        'Blend until completely smooth.',
        'Taste and adjust sweetness if necessary.',
        'Divide the mousse into serving dishes and chill for at least 30 minutes before serving.',
        'Garnish with fresh berries or chocolate shavings if desired.'
      ],
      imageUrl: 'assets/choco-mousse.jpg',
      cookTime: 10,
      tags: ['dessert', 'healthy', 'vegan', 'gluten-free']
    }
  ];

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(this.mockRecipes);
  }

  getRecipe(id: number): Observable<Recipe | undefined> {
    return of(this.mockRecipes.find(recipe => recipe.id === id));
  }
}
