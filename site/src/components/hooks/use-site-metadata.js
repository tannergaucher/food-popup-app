import { useStaticQuery, graphql } from "gatsby"

const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query SiteMetadata {
        site {
          ...SiteMetadataFragment
        }
      }
    `
  )
  return site.siteMetadata
}

export default useSiteMetadata
