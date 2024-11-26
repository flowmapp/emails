import React from 'react'

import { colors } from '@const'

import Marketing from '@layouts/Marketing'

import { Button, Card, Chip, Container, H1, H2, Image, P, Span } from '@core'

import mail from '@static/onboarding2/mail.png'

const s = {
  mail: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: -1,
    verticalAlign: 'middle',
  },
  chip: {
    fontWeight: 700,
    fontSize: 12,
    lineHeight: '16px',
    padding: '6px 10px',
    borderRadius: 8,
    marginBottom: 0,
  },
  p: {
    marginBottom: 32,
  },
  span: {
    color: colors.black,
    fontSize: 18,
    verticalAlign: 'middle',
    marginRight: 8,
  },
  thesis: {
    marginBottom: 24,
  },
}

const renderEmail = (props) => (
  <>
    <div style={s.thesis}>
      <Image src={mail} alt="mail" style={s.mail} />
      <Span style={s.span}>{props.title}</Span>
      <Chip style={s.chip}>{props.chip}</Chip>
    </div>
    <P style={s.p}>{props.text}</P>
  </>
)

export default function main(props) {
  const emails = [
    {
      title: 'Email 1 — Full Proposal',
      chip: '+10% in sales',
      // eslint-disable-next-line max-len
      text: "We'll show you how to increase sales with compelling proposals that showcase the future website's structure and design.",
    },
    {
      title: 'Email 2 — Selling UX',
      chip: '+15% in sales',
      text: "We'll teach you how to sell UX, not just UI. Discover how detailed flow planning adds value for clients.",
    },
    {
      title: 'Email 3 — Wireframes work',
      chip: '+30% in sales',
      // eslint-disable-next-line max-len
      text: "We'll explain how to impress clients with wireframes. They make it look like half the work on the website is already done.",
    },
    {
      title: 'Email 4 — Boost by content',
      chip: '+45% in sales',
      // eslint-disable-next-line max-len
      text: "We'll cover how to boost conversions through content. Learn why clients are more likely to choose proposal with content.",
    },
    {
      title: 'Email 5 — Visual estimation',
      chip: '+60% in sales',
      text: 'Stand out with next-generation project estimates and invoices that impress.',
    },
    {
      title: 'Email 6 — Customer interaction',
      chip: '+75% in sales',
      text: "We'll show you how to collaborate and communicate with clients directly within the project.",
    },
    {
      title: 'Email 7 — Win more clients',
      chip: '+100% in sales',
      // eslint-disable-next-line max-len
      text: "We'll share the Manager's Checklist for a successful deal. Ensure you're following all the right steps to close deals with confidence.",
    },
  ]

  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <H1>🚀</H1>
          <H1>Introducing the revenue growth email bootcamp</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>Welcome to website planning accelerator 👋</H2>
          <P style={s.p}>
            Real practice only, no fluff: over the next 7 emails, we&apos;ll show you how Flowmapp
            helps win clients and drive growth:
          </P>

          {emails.map(renderEmail)}

          <H2 style={{ marginBottom: 32 }}>
            Don&apos;t miss the next 7 emails to boost your web development skills and results!
          </H2>
          <Button wide href="/personal">
            Go to Flowmapp
          </Button>
        </Card>
      </Container>
    </Marketing>
  )
}
