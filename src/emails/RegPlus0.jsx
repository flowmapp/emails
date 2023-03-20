import React from 'react'

import Main from '@layouts/Main'

import { A, Button, H2, Hero, Image, P } from '@core'

import sitemap from '@static/regPlus0/sitemap.png'
import video from '@static/regPlus0/video.png'

const s = {
  video: {
    marginBottom: 28,
  },
}

export default function main(props) {
  const name = props.preview ? 'John' : '%%name%%'

  return (
    <Main preview={props.preview}>
      <H2>Give five, {name} 👋</H2>
      <P>
        Meet the superpower and smart FlowMapp tools.
        <br />
        Create sitemaps, plan information architecture, make wireframes in the most easiest way. Go
        with the Flow
      </P>
      <Button href="/personal">
        Let&apos;s rock!
      </Button>
      <Hero>
        <Image src={sitemap} alt="sitemap" />
      </Hero>
      <H2>FlowMapp in 1 minute</H2>
      <A style={s.video} href="https://youtu.be/QiGHRP9t400">
        <Image src={video} alt="sitemap" />
      </A>
      <Button href="https://youtu.be/QiGHRP9t400">Watch Video</Button>
    </Main>
  )
}
