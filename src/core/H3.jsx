import React from 'react'

import { fontDefaults } from '@const'

const s = {
  h3: {
    ...fontDefaults,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '26px',
    margin: 0,
    marginBottom: 8,
    letterSpacing: '-0.04em',
  },
}

export default function main(props) {
  return <h3 style={{ ...s.h3, ...props.style }}>{props.children}</h3>
}
