import React from 'react'

const s = {
  div: {
    padding: '0 32px',
    marginBottom: 32,
  },
}

export default function main(props) {
  return <div style={{ ...s.div, ...props.style }}> {props.children} </div>
}
