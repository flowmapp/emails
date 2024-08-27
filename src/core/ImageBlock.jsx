import React from 'react'

const s = {
  div: {
    fontSize: 40,
    width: 40,
    height: 40,
    lineHeight: '40px',
    borderRadius: 20,
    marginBottom: 12,
    display: 'inline-block',
    overflow: 'hidden',
  },
}

export default function main(props) {
  return <div style={{ ...s.div, ...props.style }}> {props.children} </div>
}
