import React from 'react'

import { fontDefaults } from '@const'

const s = {
  a: {
    ...fontDefaults,
    display: 'block',
    float: 'left',
  },
}

export default function main(props) {
  const href = props.href.match(/^\//)
    ? `%%baseUrl%%${props.href}?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%`
    : props.href
  return (
    <a {...props} href={href} style={{ ...s.a, ...props.style }} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  )
}
