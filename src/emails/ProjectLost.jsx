import React from 'react'

import System from '@layouts/System'

import { Container, H2, P } from '@core'

export default function main(props) {
  const owner = props.preview ? 'John' : '%%owner%%'
  const by = props.preview ? 'Bob' : '%%by%%'
  const project = props.preview ? 'Invision App' : '%%project%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <H2>Hi, {owner} 👋</H2>
        <P>
          {by} has transferred your project {project} into another workspace
        </P>

        <P>
          Just wanted you to know,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </System>
  )
}
