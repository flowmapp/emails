import React from 'react'

import { colors } from '@const'

import { Span } from '@core'

import checkmark from '@static/common/checkmark.png'

const s = {
  checklist: { marginBottom: 16 },
  item: {
    display: 'table',
    padding: 8,
    paddingRight: 0,
    width: '100%',
    marginBottom: 8,
    borderRadius: 8,
  },
  checked: {
    backgroundColor: '#d6f5d8',
  },
  checkbox: {
    border: '1px solid #29a32f',
    width: 20,
    height: 20,
    borderRadius: '50%',
    marginRight: 8,
    float: 'left',
  },
  checkmark: {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${checkmark})`,
    backgroundPosition: 'center',
    backgroundSize: 12,
    backgroundRepeat: 'no-repeat',
  },
  content: {
    float: 'left',
  },
  title: {
    display: 'table',
    textAlign: 'left',
    fontWeight: 500,
    fontSize: 14,
    color: colors.black,
  },
  description: {
    display: 'table',
    color: '#5f7da0',
  },
}

export default function main(props) {
  return (
    <div style={{ ...s.checklist, ...props.style }}>
      {props.items.map((item) => {
        const itemStyle = item.checked ? { ...s.item, ...s.checked } : s.item
        return (
          <div style={itemStyle}>
            <div style={s.checkbox}>{item.checked ? <div style={s.checkmark} /> : null}</div>
            <div style={s.content}>
              <Span style={s.title}>{item.title}</Span>
              <Span style={s.description}>{item.description}</Span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
