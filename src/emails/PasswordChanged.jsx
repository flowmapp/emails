import React from 'react'

import System from '@layouts/System'

import { A, Container, H2, P } from '@core'

export default function main(props) {
  const name = props.preview ? 'John' : '%%name%%'
  const email = props.preview ? 'john@flowmapp.com' : '%%email%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <H2>Hi, {name} 👋</H2>
        <P>The password for {email} has been successfully changed.</P>

        <P>
          <span>Did&lsquo;t change your password? </span>
          <A color="blue" href="https://flowmapp.com/contact-us/" inline>
            Contact FlowMapp Support
          </A>
          <span> so we can make sure no one else is trying to access your account.</span>
        </P>

        <P>
          Have a nice day,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </System>
  )
}
