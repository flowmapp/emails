import React from 'react'

import System from '@layouts/System'

import { Button, Container, H2, P } from '@core'

export default function main(props) {
  const link = props.link ? 'http://localhost:300' : '%%link%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <H2>Forgot your password?</H2>
        <P>That&lsquo;s okay, it happens. Click on the button below to reset your password.</P>

        <Button href={link}>Reset Password</Button>

        <P>
          Have a nice day,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </System>
  )
}
