import React from 'react'

import { contentPadding } from '@const'

const s = {
  hero: {
    paddingLeft: contentPadding,
    paddingRight: contentPadding,
  },
}

export default function main(props) {
  return <div style={s.hero}>{props.children}</div>
}
