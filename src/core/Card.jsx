import React from 'react'

import { colors, contentPadding } from '@const'

const s = {
  content: {
    backgroundColor: '#fff',
    padding: contentPadding,
    marginBottom: 4,
    borderRadius: 32,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.gray,
    textAlign: 'center',
  },
}

export default function main(props) {
  return <div style={{ ...s.content, ...props.style }}>{props.children}</div>
}
