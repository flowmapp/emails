import React from 'react'

import { colors } from '@const'

const s = {
  card: {
    backgroundColor: colors.white,
    borderRadius: 12,
    boxShadow: '0px 0px 20px #eee',
    padding: 24,
    marginBottom: 20,
  },
}

export default function main(props) {
  return <div style={{ ...s.card, ...props.style }}>{props.children}</div>
}
