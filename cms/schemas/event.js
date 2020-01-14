export default {
  title: 'Event',
  name: 'event',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      title: 'Date',
      name: 'date',
      type: 'datetime',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint',
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
      type: 'array',
      of: [{ type: 'url' }],
    },
    {
      title: 'Menu Items',
      name: 'menuItems',
      type: 'array',
      of: [{ type: 'eventDish' }],
    },
  ],
}
