import React from 'react'

import { fontDefaults } from '@const'

const s = {
  h2: {
    ...fontDefaults,
    fontWeight: 600,
    fontSize: 24,
    lineHeight: '32px',
    margin: 0,
    marginBottom: 8,
    letterSpacing: '-0.04em',
  },
}

export default function main(props) {
  return <h2 style={{ ...s.h2, ...props.style }}>{props.children}</h2>
}
