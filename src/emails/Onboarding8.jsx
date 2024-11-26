import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P } from '@core'

import progress from '@static/onboarding9/progress.jpg'
import sitemap from '@static/onboarding3/sitemap.jpg'

const s = {
  image: {
    marginBottom: 32,
  },
}

export default function main(props) {
  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <Chip style={{ marginRight: 8 }}>Step 6</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+75%</Chip>
          <H1>Subject</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>Big subject</H2>
          <P>Some text</P>

          <H3>Subsubject</H3>
          <br />
          <P>Text</P>
          <P>More text</P>
          <br />
          <Image borderRadius={16} src={sitemap} alt="Client will choose this" style={s.image} />

          <H2>Dont forget to change this as well</H2>
          <br />
          <Image borderRadius={16} src={progress} alt="progress" style={s.image} />
          <Button wide href="/personal">
            Go to Flowmapp
          </Button>
        </Card>
      </Container>
    </Marketing>
  )
}
