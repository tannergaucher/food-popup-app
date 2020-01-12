import React from "react"

import { useSiteMetadata } from "../hooks"

export default function Header() {
  const { title } = useSiteMetadata()

  return (
    <header>
      <h4>{title}</h4>
    </header>
  )
}
