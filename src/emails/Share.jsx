import React from 'react'

import Service from '@layouts/Service'

import { Button, Card, Container, Gray, H2, TextBlock } from '@core'

export default function main(props) {
  const actorFullName = props.preview ? 'Andrey Severin' : '%%actorFullName%%'
  const link = props.preview ? 'https://app.flowmapp.com' : '%%link%%'

  return (
    <Service preview={props.preview} noImage>
      <Container>
        <Card>
          <TextBlock>
            <H2>
              {actorFullName} <Gray>sent you a Flowmapp share link!</Gray>
            </H2>
          </TextBlock>

          <Button wide href={link}>
            View Share Link
          </Button>
        </Card>
      </Container>
    </Service>
  )
}
