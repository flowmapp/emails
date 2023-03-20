import React from 'react'

import { fontDefaults } from '@const'

const s = {
  p: {
    ...fontDefaults,
    marginBottom: 24,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '22px',
    letterSpacing: 0,
    textAlign: 'center',
  },
}

export default function main(props) {
  return <p style={{ ...s.p, ...props.style }}>{props.children}</p>
}
