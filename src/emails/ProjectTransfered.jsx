import React from 'react'

import System from '@layouts/System'

import { Button, Container, H2, P } from '@core'

export default function main(props) {
  const newOwner = props.preview ? 'John' : '%%newOwner%%'
  const oldOwner = props.preview ? 'Bob' : '%%oldOwner%%'
  const project = props.preview ? 'Invision App' : '%%project%%'
  const projectLink = props.preview ? 'https://app.flowmapp.com' : '%%projectLink%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <H2>Hi, {newOwner} 👋</H2>
        <P>
          {oldOwner} wants to transfer {project} project ownership to you
        </P>

        <Button href={projectLink}>Take this project</Button>

        <P>
          Just wanted you to know,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </System>
  )
}
