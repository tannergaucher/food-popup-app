export default {
  title: 'Dish',
  name: 'dish',
  type: 'document',
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'blockContent',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      title: 'Cuisine',
      name: 'cuisine',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'cuisine' } }],
    },
    {
      title: 'Recipes',
      name: 'recipes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'recipe' } }],
    },
  ],
}
