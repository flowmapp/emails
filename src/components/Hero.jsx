import React from 'react'

import { contentPadding } from '@const'

const s = {
  hero: {
    marginLeft: -contentPadding,
    marginRight: -contentPadding,
  },
}

export default function main(props) {
  return <div style={s.hero}>{props.children}</div>
}
