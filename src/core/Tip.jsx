import React from 'react'

import { colors } from '@const'

import { P } from '@core'

const s = {
  tip: {
    backgroundColor: colors.yellow,
    borderRadius: 16,
    padding: 32,
    marginBottom: 32,
  },
}

export default function main(props) {
  return <P style={{ ...s.tip, ...props.style }}>{props.children}</P>
}
