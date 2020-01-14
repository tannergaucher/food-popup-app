export default {
  title: 'Event Dish',
  name: 'eventDish',
  type: 'document',
  fields: [
    {
      title: 'Dish',
      name: 'dish',
      type: 'reference',
      to: [{ type: 'dish' }],
    },
    {
      title: 'Price',
      name: 'price',
      type: 'number',
    },
    {
      title: 'Available',
      name: 'available',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'dish.name',
    },
  },
}
