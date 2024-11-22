import React from 'react'

import { colors, fontDefaults } from '@const'

const s = {
  chip: {
    ...fontDefaults,
    display: 'inline-block',
    float: 'left',
    backgroundColor: colors.white,
    fontWeight: 700,
    fontSize: 14,
    lineHeight: '17px',
    textAlign: 'center',
    borderRadius: 32,
    padding: 10,
    marginRight: 6,
    marginBottom: 6,
    boxShadow: '0px 0px 12px #ddd',
  },
}

export default function main(props) {
  return <div style={{ ...s.chip, ...props.style }}>{props.children}</div>
}
