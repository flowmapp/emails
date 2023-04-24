import React from 'react'

const s = {
  img: {
    maxWidth: '100%',
  },
}

export default function main(props) {
  return <img style={{ ...s.img, borderRadius: props.borderRadius }} {...props} />
}
