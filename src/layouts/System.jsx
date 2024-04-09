import React from 'react'

import Common, { commonFooterLinks } from '@layouts/Common'

export default function main(props) {
  const footerLinks = commonFooterLinks

  return (
    <Common preview={props.preview} footerLinks={footerLinks}>
      {props.children}
    </Common>
  )
}
