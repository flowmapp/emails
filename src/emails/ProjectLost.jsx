import React from 'react'

import Main from '@layouts/Main'

import { Container, H2, P } from '@core'

export default function main(props) {
  const owner = props.preview ? 'John' : '%%owner%%'
  const by = props.preview ? 'Bob' : '%%by%%'
  const project = props.preview ? 'Invision App' : '%%project%%'

  return (
    <Main preview={props.preview} noImage>
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
    </Main>
  )
}
