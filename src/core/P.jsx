import React from 'react'

import { fontDefaults } from '@const'

const s = {
  p: {
    ...fontDefaults,
    marginTop: 0,
    marginBottom: 12,
    fontSize: 16,
    fontWeight: 300,
    lineHeight: '24px',
    letterSpacing: 0,
    textAlign: 'center',
  },
}

export default function main(props) {
  return <p style={{ ...s.p, ...props.style }}>{props.children}</p>
}
