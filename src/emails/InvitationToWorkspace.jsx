import React from 'react'

import System from '@layouts/System'

import { Button, Card, Container, Gray, H2, Image, ImageBlock, TextBlock } from '@core'

import user from '@static/common/user.png'

export default function main(props) {
  const actorFullName = props.preview ? 'Andrey Severin' : '%%actorFullName%%'
  const actorAvatarUrl = props.preview ? user : '%%actorAvatarUrl%%'
  const workspaceTitle = props.preview ? 'FlowMapp' : '%%workspaceTitle%%'
  const workspaceLink = props.preview ? 'https://app.flowmapp.com' : '%%workspaceLink%%'

  return (
    <System preview={props.preview} noImage>
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
            Join the Workspace
          </Button>
        </Card>
      </Container>
    </System>
  )
}
