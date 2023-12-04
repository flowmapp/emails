import React from 'react'

import Main from '@layouts/Main'

import { A, Container, H2, P, Preview } from '@core'

export default function main(props) {
  const toUsername = props.preview ? 'John' : '%%toUsername%%'
  const fromUsername = props.preview ? 'Bob' : '%%fromUsername%%'
  const link = props.preview ? 'http://localhost:300' : '%%link%%'
  const linkTitle = props.preview ? 'Invision App' : '%%linkTitle%%'
  const html = props.preview ? 'This is a comment' : '%%%html%%%'

  return (
    <Main preview={props.preview} noImage>
      <Container>
        <H2>Hi, {toUsername} 👋</H2>
        <P>
          New comment posted in&nbsp;
          <A inline href={link} color="blue">
            {linkTitle}
          </A>
          <br />
          By {fromUsername}
        </P>

        <Preview>{html}</Preview>

        <P>
          Have a nice day,
          <br />
          The FlowMapp team
        </P>
      </Container>
    </Main>
  )
}
