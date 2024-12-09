import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { B, Button, Card, Container, H1, H2, Image, P, Tip } from '@core'

import alanWake from '@static/onboarding10/alanWake.png'
import promo from '@static/onboarding10/promo.jpg'

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
          <H1>Come together ⭐</H1>
          <P>
            Still not on board with top web designers and agencies?
            <br />
            No way! Here&apos;s a special deal to show you exactly how FlowMapp can boost your
            profits.
          </P>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2 style={{ color: colors.midGray }}>
            Use the promo code
            <B style={{ color: colors.blue }}> FMTEST50 </B>
            to get
            <B style={{ color: colors.black }}> 50% discount on all monthly plans </B>
            and experience how Flowmapp can level up your workflow.
          </H2>
          <br />

          <Image borderRadius={16} src={promo} alt="promo" style={s.image} />

          <P>Not just words — here’s what real clients say:</P>
          <br />

          <Tip>
            &quot;I’ve been using FlowMapp for years. With the new features, it’s becoming essential
            for my web development process. Recently, I quoted a larger site, quickly created a
            sitemap, mapped page features, and estimated expenses. Excited!&quot;
          </Tip>

          <Image src={alanWake} alt="Alan Wake" width={166} />
          <br />

          <br />
          <Button wide href="/personal">
            Claim 50% off and start your test drive
          </Button>
        </Card>
      </Container>
    </Marketing>
  )
}
