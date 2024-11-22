import React from 'react'

import { fontDefaults } from '@const'

const s = {
  h1: {
    ...fontDefaults,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    margin: 0,
    marginBottom: 16,
    letterSpacing: '-0.04em',
  },
}

export default function main(props) {
  return <h1 style={{ ...s.h1, ...props.style }}>{props.children}</h1>
}
