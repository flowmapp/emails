import React from 'react'

const s = {
  img: {
    maxWidth: '100%',
  },
}

export default function main(props) {
  const { borderRadius, ...rest } = props
  return <img style={{ ...s.img, borderRadius }} {...rest} src={`${props.img}?v=5`} />
}
