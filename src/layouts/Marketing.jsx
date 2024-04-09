import React from 'react'

import Common, { commonFooterLinks } from '@layouts/Common'

export default function main(props) {
  const unsubscribeLink = props.preview ? '/unsubscribe' : '%%unsubscribeLink%%'

  const footerLinks = [
    ...commonFooterLinks,
    {
      href: unsubscribeLink,
      title: 'Unsubscribe',
    },
  ]

  return (
    <Common preview={props.preview} footerLinks={footerLinks}>
      {props.children}
    </Common>
  )
}
