import React from 'react'

import { fontDefaults } from '@const'

const s = {
  h2: {
    ...fontDefaults,
    fontWeight: 900,
    fontSize: 42,
    lineHeight: '48px',
    margin: 0,
    marginBottom: 20,
    textAlign: 'center',
  },
}

export default function main(props) {
  return <h2 style={s.h2}>{props.children}</h2>
}
