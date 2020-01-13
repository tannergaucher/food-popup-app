import { useStaticQuery, graphql } from "gatsby"

const useAllSanityEvent = () => {
  const { allSanityEvent } = useStaticQuery(
    graphql`
      query AllSanityEvent {
        allSanityEvent {
          edges {
            node {
              ...SanityEventFragment
            }
          }
        }
      }
    `
  )
  return allSanityEvent
}

export default useAllSanityEvent
