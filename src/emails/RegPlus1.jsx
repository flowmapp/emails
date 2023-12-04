import React from 'react'

import Main from '@layouts/Main'

import { A, B, Button, Chip, Container, H2, Image, P } from '@core'

import content from '@static/regPlus1/content.png'
import sitemap from '@static/regPlus1/sitemap.png'
import userflow from '@static/regPlus1/userflow.png'
import wireframes from '@static/regPlus1/wireframes.png'

const s = {
  chips: {
    display: 'table',
    marginBottom: 48,
    width: '100%',
  },
  chipRow: {
    display: 'table',
    margin: '0 auto',
  },
  chipLink: {
    display: 'inline-block',
    color: 'inherit',
    float: 'none',
  },
  images: {
    display: 'table',
    marginBottom: 48,
  },
  image: {
    width: '50%',
    padding: 4,
  },
  getStarted: {
    marginBottom: 48,
  },
}

export default function main(props) {
  const chipRows = [
    [
      { linkText: 'Check out', text: 'Demo Project', href: '/share/projects/215285' },
      { linkText: 'Create Sitemap', text: 'using templates', href: '/personal' },
    ],
    [
      { linkText: 'Build', text: 'a few Userflows', href: '/personal' },
      { linkText: 'Build Wireframes', text: 'using Block Library', href: '/personal' },
    ],
    [{ linkText: 'Pass the onboarding', text: 'to get a 75% bonus', href: '/personal' }],
  ]

  const renderChipRow = (chipRow) => (
    <div key={Math.random()} style={s.chipRow}>
      {chipRow.map((chip) => (
        <Chip key={chip.text}>
          <B>
            <A style={s.chipLink} href={chip.href}>
              {chip.linkText}&nbsp;
            </A>
          </B>
          {chip.text}
        </Chip>
      ))}
    </div>
  )

  return (
    <Main preview={props.preview}>
      <Container>
        <H2>
          Ready. Steady.&nbsp;<B>Flow</B>
        </H2>
        <P>
          90% of our users understand how to use FlowMapp tools within
          <br />
          the first 60 seconds. We make it powerful, effective, and simple.
          <br />
          Just the way you love
        </P>
        <div style={s.chips}>{chipRows.map(renderChipRow)}</div>
        <div style={s.images}>
          <A style={s.image} href="/personal">
            <Image src={sitemap} alt="create sitemap" />
          </A>
          <A style={s.image} href="/personal">
            <Image src={userflow} alt="create userflow" />
          </A>
          <A style={s.image} href="/personal">
            <Image src={wireframes} alt="create wireframes" />
          </A>
          <A style={s.image} href="/personal">
            <Image src={content} alt="create content" />
          </A>
        </div>
        <Button style={s.getStarted} href="/personal">
          Get started
        </Button>
      </Container>
    </Main>
  )
}
