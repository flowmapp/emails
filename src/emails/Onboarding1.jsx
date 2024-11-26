import React from 'react'

import Marketing from '@layouts/Marketing'

import { A, Button, Card, Container, H1, H2, H3, Image, P, Span } from '@core'

import brands from '@static/onboarding1/brands.png'
import brands2 from '@static/onboarding1/brands2.png'
import founders from '@static/onboarding1/founders.png'
import video from '@static/onboarding1/video.jpg'

const s = {
  video: {
    marginBottom: 28,
  },
  p: {
    marginBottom: 32,
  },
}

export default function main(props) {
  const name = props.preview ? 'John' : '%%name%%'

  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <H1>👋</H1>
          <H1>Give five, {name}</H1>
          <P style={{ marginBottom: 32 }}>
            We&apos;re glad to see you here!
            <br />
            Learn the basics by watching this quick 1-minute video:
          </P>
          <A
            style={s.video}
            href="https://help.flowmapp.com/help/getting-started/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
          >
            <Image src={video} alt="video" borderRadius={10} />
          </A>
          <Button
            wide
            href="https://help.flowmapp.com/help/getting-started/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
          >
            Watch Video
          </Button>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>Boost your Design Revenue 💪 </H2>
          <P style={s.p}>Many of you create beautiful websites:</P>
          <Image src={brands} alt="brands" width={255} style={{ marginBottom: 32 }} />
          <P style={s.p}>... but we also know how hard it is to sell design service now. 😰</P>
          <P style={s.p}>
            We&apos;ve researched hundreds clients to solve this challenge. And we&apos;ve found the
            solution!
          </P>
          <P style={s.p}>
            Brand new Flowmapp 3.0 helps agencies, studios, and designers upsell by 200%: increase
            revenue, boost sales conversion rate, and win more clients.
          </P>
          <Image src={brands2} alt="brands" width={536} style={{ marginBottom: 20 }} />
          <H2>How? 🤔</H2>
          <P style={s.p}>
            We&apos;ll send you a free course in our upcoming emails on how to boost your design
            revenue!
          </P>
          <div>
            <Image
              src={founders}
              alt="founders"
              width={116}
              style={{ marginBottom: 32, marginRight: 19, float: 'left' }}
            />
            <div style={{ paddingTop: 8 }}>
              <H3>Boost your sales with us</H3>
              <A href="https://x.com/severin_pro">Andrey</A>
              <Span
                style={{
                  color: 'black',
                  float: 'left',
                  fontSize: 14,
                  lineHeight: '18px',
                  paddingLeft: '.2em',
                  paddingRight: '.2em',
                }}
              >
                &
              </Span>
              <A href="https://x.com/pmitu">Paul</A>
            </div>
          </div>
          <Button wide href="/personal">
            Start Now
          </Button>
        </Card>
      </Container>
    </Marketing>
  )
}
