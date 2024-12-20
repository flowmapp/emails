import React from 'react'

import { colors, fontDefaults } from '@const'

const s = {
  chip: {
    ...fontDefaults,
    display: 'inline-block',
    color: colors.white,
    background: colors.black,
    fontWeight: 600,
    fontSize: 18,
    lineHeight: '26px',
    letterSpacing: '-0.36px',
    textAlign: 'center',
    borderRadius: 10,
    padding: '3px 12px',
    marginRight: 16,
    marginBottom: 16,
  },
}

export default function main(props) {
  return <div style={{ ...s.chip, ...props.style }}>{props.children}</div>
}
