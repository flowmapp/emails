import React from 'react'

import Marketing from '@layouts/Marketing'

import { A, Button, Card, Container, H2, Image, P } from '@core'

import video from '@static/regPlus0/video.jpg'

const s = {
  video: {
    marginBottom: 28,
  },
}

export default function main(props) {
  const name = props.preview ? 'John' : '%%name%%'

  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <H2>Give five, {name} 👋</H2>
          <P>
            Meet the superpower and smart FlowMapp tools.
            <br />
            Create sitemaps, plan information architecture, make wireframes in the most easiest way.
            Go with the Flow
          </P>
          <Button wide href="/personal">Let&apos;s rock!</Button>
        </Card>

        <br />

        <Card>
          <H2>FlowMapp in 2 minutes</H2>
          <A
            style={s.video}
            href="https://help.flowmapp.com/help/getting-started/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
          >
            <Image src={video} alt="sitemap" borderRadius={10} />
          </A>
          <Button wide href="https://help.flowmapp.com/help/getting-started/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%">
            Watch Video
          </Button>
        </Card>
      </Container>
    </Marketing>
  )
}
