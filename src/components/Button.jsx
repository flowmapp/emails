import React from 'react'

import { colors, fontDefaults } from '@const'

import { A } from '@components'

const s = {
  a: {
    ...fontDefaults,
    display: 'inline-block',
    backgroundColor: colors.blue,
    padding: '12px 34px',
    color: colors.white,
    borderRadius: 8,
    marginBottom: 8,
    fontSize: 16,
    float: 'none'
  },
}

export default function main(props) {
  return (
    <A style={{ ...s.a, ...props.style }} href={props.href}>
      {props.children}
    </A>
  )
}
