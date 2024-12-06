import React from 'react'

const s = {
  img: {
    maxWidth: '100%',
  },
}

export default function main(props) {
  const { borderRadius, style, ...rest } = props
  return <img style={{ ...s.img, ...style, borderRadius }} {...rest} src={`${props.src}?v=10`} />
}
