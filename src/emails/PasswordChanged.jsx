import React from 'react'

import System from '@layouts/System'

import { Button, Card, Container, Gray, H2, ImageBlock, P, TextBlock } from '@core'

export default function main(props) {
  const email = props.preview ? 'john@flowmapp.com' : '%%email%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <Card>
          <ImageBlock>🔒</ImageBlock>

          <TextBlock>
            <H2>
              <Gray>The password for</Gray> {email} <Gray>has been successfully changed.</Gray>
            </H2>
          </TextBlock>

          <Button wide href="https://app.flowmapp.com">
            Go to Flowmapp
          </Button>
        </Card>

        <Card>
          <TextBlock>
            <H2>Didn&lsquo;t change the password?</H2>
            <P>
              Contact Flowmapp support so we can make sure no one else is trying to access your
              account.
            </P>
          </TextBlock>

          <Button wide secondary href="/upgrade">
            Contact Flowmapp support
          </Button>
        </Card>
      </Container>
    </System>
  )
}
