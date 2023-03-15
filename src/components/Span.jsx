import React from 'react'

import { colors, fontDefaults } from '@const'

const s = {
  span: {
    ...fontDefaults,
    fontSize: 12,
    fontWeight: 400,
    lineHeight: '14px',
    color: colors.gray,
    textAlign: 'center',
  },
}

export default function main(props) {
  return <span style={s.span}>{props.children}</span>
}
