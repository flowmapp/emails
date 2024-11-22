import React from 'react'

import Service from '@layouts/Service'

import { Button, Card, Container, Gray, H1, Image, ImageBlock, Preview, TextBlock } from '@core'

import user from '@static/common/user.png'

export default function main(props) {
  const actorFullName = props.preview ? 'Andrey Severin' : '%%actorFullName%%'
  const actorAvatarUrl = props.preview ? user : '%%actorAvatarUrl%%'
  const link = props.preview ? 'http://localhost:3000' : '%%link%%'
  const linkTitle = props.preview ? 'Invision App' : '%%linkTitle%%'
  const html = props.preview ? 'This is a comment' : '%%%html%%%'

  return (
    <Service preview={props.preview} noImage>
      <Container>
        <Card>
          <ImageBlock>
            <Image src={actorAvatarUrl} alt="avatar" />
          </ImageBlock>

          <TextBlock>
            <H1>
              {actorFullName}
              <Gray> mentioned you in </Gray>
              {linkTitle}
            </H1>
          </TextBlock>

          <Preview>{html}</Preview>

          <Button wide href={link}>
            View in Flowmapp
          </Button>
        </Card>
      </Container>
    </Service>
  )
}
