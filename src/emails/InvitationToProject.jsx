import React from 'react'

import Service from '@layouts/Service'

import { Button, Card, Container, Gray, H1, Image, ImageBlock, TextBlock } from '@core'

import user from '@static/common/user.png'

export default function main(props) {
  const actorFullName = props.preview ? 'Andrey Severin' : '%%actorFullName%%'
  const actorAvatarUrl = props.preview ? user : '%%actorAvatarUrl%%'
  const projectTitle = props.preview ? 'Invision App' : '%%projectTitle%%'
  const projectLink = props.preview ? 'https://app.flowmapp.com' : '%%projectLink%%'

  return (
    <Service preview={props.preview} noImage>
      <Container>
        <Card>
          <ImageBlock>
            <Image src={actorAvatarUrl} alt="avatar" />
          </ImageBlock>

          <TextBlock>
            <H1>
              {actorFullName} <Gray>invited you to collaborate on</Gray> {projectTitle}
            </H1>
          </TextBlock>

          <Button wide href={projectLink}>
            Join the project
          </Button>
        </Card>
      </Container>
    </Service>
  )
}
