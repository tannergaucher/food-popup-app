import React, { useState, useEffect } from "react"
import { navigate } from "gatsby"

export default function EventTemplatePage({ data }) {
  const event = data.sanityEvent

  return (
    <>
      <h1>{event.title}</h1>
      <h4>{event.date}</h4>
      <br />
      {event.menuItems.map(menuItem => (
        <MenuItem menuItem={menuItem} key={menuItem.dish.id} />
      ))}
    </>
  )
}

function MenuItem({ menuItem }) {
  const [total, setTotal] = useState(1)

  return (
    <div>
      <h2>{menuItem.dish.name}</h2>
      <h2>${menuItem.price}</h2>
      <br />
      <small>Available: {menuItem.available}</small>
      <br />

      <button onClick={() => setTotal(total - 1)} disabled={total === 1}>
        -
      </button>
      <input type="number" value={total} min="1" />
      <button
        onClick={() => setTotal(total + 1)}
        disabled={total === menuItem.available}
      >
        +
      </button>
      <br />
      <button>Pay {`${total * menuItem.price}`}</button>
    </div>
  )
}

export const pageQuery = graphql`
  query EVENT_TEMPLATE_QUERY($slug: String!) {
    sanityEvent(slug: { current: { eq: $slug } }) {
      ...SanityEventFragment
    }
  }
`
