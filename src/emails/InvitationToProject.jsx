import React from 'react'

import Main from '@layouts/Main'

import { Button, Container, P } from '@core'

export default function main(props) {
  const owner = props.preview ? 'Bob' : '%%owner%%'
  const project = props.preview ? 'Invision App' : '%%project%%'
  const projectLink = props.preview ? 'https://app.flowmapp.com' : '%%projectLink%%'

  return (
    <Main preview={props.preview} noImage>
      <Container>
        <P>
          {owner} invited you to collaborate on {project} using FlowMapp.
        </P>

        <Button href={projectLink}>Join the Project</Button>

        <P>
          Have a nice day,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </Main>
  )
}
