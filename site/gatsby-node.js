const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // Query all sanity events.
  const allEventsQuery = await graphql(`
    query {
      allSanityEvent {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  // Create page for each event, passing event slug into context.
  allEventsQuery.data.allSanityEvent.edges.forEach(edge => {
    createPage({
      path: `/events/${edge.node.slug.current}`,
      component: path.resolve(`./src/templates/event-template.js`),
      context: {
        slug: edge.node.slug.current,
      },
    })
  })
}
