import React from 'react'

import Service from '@layouts/Service'

import { A, Container, H2, P } from '@core'

export default function main(props) {
  const owner = props.preview ? 'John' : '%%owner%%'
  const by = props.preview ? 'Bob' : '%%by%%'
  const project = props.preview ? 'Invision App' : '%%project%%'

  return (
    <Service preview={props.preview} noImage>
      <Container>
        <H2>Hi, {owner} 👋</H2>
        <P>
          <span>{by} has transferred project </span>
          <A color="blue" href="https://app.flowmapp.com" inline>
            {project}
          </A>
          <span> into your workspace</span>
        </P>

        <P>
          Just wanted you to know,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </Service>
  )
}
