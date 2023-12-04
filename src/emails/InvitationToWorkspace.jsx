import React from 'react'

import Main from '@layouts/Main'

import { Button, Container, P } from '@core'

export default function main(props) {
  const owner = props.preview ? 'Bob' : '%%owner%%'
  const workspace = props.preview ? 'Invision App' : '%%workspace%%'
  const workspaceLink = props.preview ? 'https://app.flowmapp.com' : '%%workspaceLink%%'

  return (
    <Main preview={props.preview} noImage>
      <Container>
        <P>
          {owner} invited you to collaborate on {workspace} using FlowMapp.
        </P>

        <Button href={workspaceLink}>Join the Workspace</Button>

        <P>
          Have a nice day,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </Main>
  )
}
