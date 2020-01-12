import React from "react"

import { useSiteMetadata } from "../hooks"

export default function Footer() {
  const { title } = useSiteMetadata()

  return (
    <footer>
      <h4>{title}</h4>
    </footer>
  )
}
