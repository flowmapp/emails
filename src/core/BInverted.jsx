import React from 'react'

import { colors } from '@const'

import { B } from '@core'

const s = {
  b: {
    color: colors.white,
    backgroundColor: colors.blue,
    borderRadius: 24,
    paddingLeft: 8,
    paddingRight: 8,
  },
}

export default function main(props) {
  return <B style={{ ...s.b, ...props.style }}>{props.children}</B>
}
