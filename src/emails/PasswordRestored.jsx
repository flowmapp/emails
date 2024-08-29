import React from 'react'

import System from '@layouts/System'

import { Button, Card, Container, H2, ImageBlock, P, TextBlock } from '@core'

export default function main(props) {
  const link = props.link ? 'http://localhost:3000' : '%%link%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <Card>
          <ImageBlock>🤔</ImageBlock>

          <TextBlock>
            <H2>Forgot your password?</H2>
            <P>Click the button below to reset your password.</P>
          </TextBlock>

          <Button wide href={link}>Reset password</Button>
        </Card>
      </Container>
    </System>
  )
}
