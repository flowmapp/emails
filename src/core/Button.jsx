import React from 'react'

import { colors, fontDefaults } from '@const'

import { A } from '@core'

const s = {
  a: {
    ...fontDefaults,
    display: 'inline-block',
    backgroundColor: colors.blue,
    padding: '19px 32px',
    color: colors.white,
    borderRadius: 16,
    fontSize: 18,
    fontWeight: 600,
    float: 'none',
    lineHeight: '26px',
    textAlign: 'center',
  },
  secondary: {
    color: colors.black,
    backgroundColor: colors.gray,
  },
}

export default function main(props) {
  return (
    <A
      style={{
        ...s.a,
        ...(props.secondary ? s.secondary : {}),
        width: props.wide && '100%',
        ...props.style,
      }}
      href={props.href}
    >
      {props.children}
    </A>
  )
}
