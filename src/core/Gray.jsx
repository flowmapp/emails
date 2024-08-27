import React from 'react'

import { colors } from '@const'

const s = {
  span: {
    color: '#999',
  },
}

export default function main(props) {
  return <span style={{ ...s.span, ...props.style }}>{props.children}</span>
}
