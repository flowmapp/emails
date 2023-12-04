import React from 'react'

import { fontDefaults, colors } from '@const'

export default function main(props) {
  const s = {
    a: {
      ...fontDefaults,
      display: props.inline ? undefined : 'block',
      float: props.inline ? undefined : 'left',
      color: colors[props.color] || fontDefaults.color,
    },
  }

  const href = props.href.match(/^\//)
    ? `%%baseUrl%%${props.href}?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%`
    : props.href
  return (
    <a {...props} href={href} style={{ ...s.a, ...props.style }} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  )
}
