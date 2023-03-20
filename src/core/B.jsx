import React from 'react'

import { colors } from '@const'

const s = {
  b: {
    color: colors.blue,
  },
}

export default function main(props) {
  return <b style={s.b}>{props.children}</b>
}
