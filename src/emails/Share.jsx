import React from 'react'

import Service from '@layouts/Service'

import { Button, Container, H2, P } from '@core'

export default function main(props) {
  const owner = props.preview ? 'Bob' : '%%owner%%'
  const link = props.preview ? 'https://app.flowmapp.com' : '%%link%%'

  return (
    <Service preview={props.preview} noImage>
      <Container>
        <H2>Hi!</H2>
        <P>{owner} sent you a FlowMapp share link!</P>

        <Button href={link}>View Share Link</Button>

        <P>
          Have a nice day,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </Service>
  )
}
