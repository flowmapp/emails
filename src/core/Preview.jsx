import React from 'react'

import { colors, fontDefaults } from '@const'

const s = {
  preview: {
    ...fontDefaults,
    display: 'block',
    width: '100%',
    backgroundColor: colors.lightGray,
    fontSize: 14,
    lineHeight: '24px',
    textAlign: 'left',
    borderRadius: 16,
    padding: '12px 32px',
    marginBottom: 24,
  },
}

export default function main(props) {
  return <div style={{ ...s.preview, ...props.style }}>{props.children}</div>
}
