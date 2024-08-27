import React from 'react'

import { fontDefaults } from '@const'

const s = {
  h2: {
    ...fontDefaults,
    fontWeight: 600,
    fontSize: 32,
    lineHeight: '40px',
    margin: 0,
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: '-0.04em',
  },
}

export default function main(props) {
  return <h2 style={{ ...s.h2, ...props.style }}>{props.children}</h2>
}
