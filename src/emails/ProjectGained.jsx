import React from 'react'

import System from '@layouts/System'

import { Button, Card, Container, Gray, H1, Image, ImageBlock, TextBlock } from '@core'

import user from '@static/common/user.png'

export default function main(props) {
  const actorFullName = props.preview ? 'Andrey Severin' : '%%actorFullName%%'
  const actorAvatarUrl = props.preview ? user : '%%actorAvatarUrl%%'
  const projectTitle = props.preview ? 'Invision App' : '%%projectTitle%%'
  const projectLink = props.preview ? 'https://app.flowmapp.com' : '%%projectLink%%'

  return (
    <System preview={props.preview} noImage>
      <Container>
        <Card>
          <ImageBlock>
            <Image src={actorAvatarUrl} alt="avatar" />
          </ImageBlock>

          <TextBlock>
            <H1>
              {actorFullName} <Gray>has transferred the project</Gray> {projectTitle}{' '}
              <Gray>into your workspace</Gray>
            </H1>
          </TextBlock>

          <Button wide href={projectLink}>
            View in Flowmapp
          </Button>
        </Card>
      </Container>
    </System>
  )
}
