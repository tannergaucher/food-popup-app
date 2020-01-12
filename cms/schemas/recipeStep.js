export default {
  title: "Recipe Step",
  name: "recipeStep",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string"
    },
    {
      title: "Instruction",
      name: "instruction",
      type: "blockContent"
    },
    {
      title: "Image",
      name: "Image",
      type: "image"
    }
  ]
};
