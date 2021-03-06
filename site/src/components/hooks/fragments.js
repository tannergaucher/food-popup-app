export const SITE_METADATA_FRAGMENT = graphql`
  fragment SiteMetadataFragment on Site {
    siteMetadata {
      title
      description
    }
  }
`

export const SANITY_EVENT_FRAGMENT = graphql`
  fragment SanityEventFragment on SanityEvent {
    id
    date
    title
    socialLinks
    menuItems {
      dish {
        ...SanityDishFragment
      }
      price
      available
    }
  }
`
export const SANITY_RECIPE_FRAGMENT = graphql`
  fragment SanityRecipeFragment on SanityRecipe {
    id
    dish {
      ...SanityDishFragment
    }
  }
`

export const SANITY_DISH_FRAGMENT = graphql`
  fragment SanityDishFragment on SanityDish {
    id
    name
  }
`

export const SANITY_CUISINE_FRAGMENT = graphql`
  fragment SanityCuisineFragment on SanityCuisine {
    id
  }
`

export const SANITY_INGREDIENT_FRAGMENT = graphql`
  fragment SanityIngredientFragment on SanityIngredient {
    id
    name
    affiliateLink
    image {
      asset {
        fluid(maxWidth: 800) {
          ...GatsbySanityImageFluid
        }
      }
    }
  }
`
