import React from 'react'

import { colors, fontDefaults } from '@const'

const s = {
  preview: {
    ...fontDefaults,
    display: 'block',
    width: '100%',
    backgroundColor: '#eaf5fc',
    fontSize: 14,
    lineHeight: '17px',
    textAlign: 'left',
    borderRadius: 6,
    padding: 10,
    marginBottom: 24,
  },
}

export default function main(props) {
  return <div style={{ ...s.preview, ...props.style }}>{props.children}</div>
}
