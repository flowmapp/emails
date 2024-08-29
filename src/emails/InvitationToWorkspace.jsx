import React from 'react'

import Service from '@layouts/Service'

import { Button, Card, Container, Gray, H2, Image, ImageBlock, TextBlock } from '@core'

import user from '@static/common/user.png'

export default function main(props) {
  const actorFullName = props.preview ? 'Andrey Severin' : '%%actorFullName%%'
  const actorAvatarUrl = props.preview ? user : '%%actorAvatarUrl%%'
  const workspaceTitle = props.preview ? 'Flowmapp' : '%%workspaceTitle%%'
  const workspaceLink = props.preview ? 'https://app.flowmapp.com' : '%%workspaceLink%%'

  return (
    <Service preview={props.preview} noImage>
      <Container>
        <Card>
          <ImageBlock>
            <Image src={actorAvatarUrl} alt="avatar" />
          </ImageBlock>

          <TextBlock>
            <H2>
              {actorFullName} <Gray>invited you to collaborate on</Gray> {workspaceTitle}
            </H2>
          </TextBlock>

          <Button wide href={workspaceLink}>
            Join the workspace
          </Button>
        </Card>
      </Container>
    </Service>
  )
}
