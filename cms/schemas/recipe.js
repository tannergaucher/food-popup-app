export default {
  title: 'Recipe',
  name: 'recipe',
  type: 'document',
  fields: [
    {
      title: 'Dish',
      name: 'dish',
      type: 'reference',
      to: [{ type: 'dish' }],
    },
    {
      title: 'Other dishes with this recipe:',
      name: 'dishes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'dish' } }],
    },
    {
      title: 'Ingredients',
      name: 'ingredients',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'ingredient' } }],
    },
    {
      title: 'Steps',
      name: 'steps',
      type: 'array',
      of: [{ type: 'recipeStep' }],
    },
    {
      title: 'Tips',
      name: 'tips',
      type: 'blockContent',
    },
  ],
  preview: {
    select: {
      title: 'dish.name',
    },
  },
}
