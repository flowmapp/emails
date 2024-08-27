import React from 'react'

const s = {
  hero: {
    paddingLeft: 4,
    paddingRight: 4,
  },
}

export default function main(props) {
  return <div style={s.hero}>{props.children}</div>
}
