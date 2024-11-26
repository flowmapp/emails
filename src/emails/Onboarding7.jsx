import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P } from '@core'

import estimates from '@static/onboarding7/estimates.jpg'
import progress from '@static/onboarding7/progress.jpg'
import total from '@static/onboarding7/total.jpg'

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
          <Chip style={{ marginRight: 8 }}>Step 5</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+60%</Chip>
          <H1>
            You estimate it,
            <br />
            your clients will too 💪
          </H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>Money сounts</H2>
          <P>A smart corporate manager knows that what can be measured can be:</P>
          <br />

          <H3>1. Optimized</H3>
          <P>
            With Flowmapp&apos;s estimation tool, you can accurately gauge project labor costs and
            understand the hours required by your team members. This makes cost and timeline
            evaluations impressively precise, enhancing your credibility with clients, contractors,
            and the team itself.
          </P>
          <P>Remember: counting effort effectively is the first step toward growth.</P>
          <br />
          <Image borderRadius={16} src={estimates} alt="estimates" style={s.image} />

          <H3>2. Sold</H3>
          <P>
            Potential clients often struggle to see why development carries its price tag. Without a
            clear project overview, they can&apos;t grasp the value behind each stage. But now,
            it&apos;s simple. Build projects in Flowmapp and enhance them with detailed, transparent
            estimates.
          </P>
          <P>
            Investing time to craft engaging proposals and invoices puts you ahead of the
            competition. Major agencies understand this and dedicate specialists to such tasks. With
            Flowmapp, you can upend industry norms. Your project plans will shine with clear
            structure, accurate estimates, and compelling design - all crafted swiftly by any team
            member, whether a developer, project manager, or sales rep.
          </P>
          <br />
          <Image borderRadius={16} src={total} alt="total" style={s.image} />

          <H3>3. Enhanced</H3>
          <P>
            Understanding key metrics and work analytics empowers you to optimize development,
            streamline team workload, and analyze past projects for better resource planning. By
            building a growing project database with every new project in FlowMapp, you continuously
            enhance your expertise.
          </P>
          <P>
            FlowMapp&apos;s tools let you create reusable project templates, cutting down both
            development time and the preparation of competitive invoices. This means you can prepare
            each commercial proposal or website structure in less time than it takes to make a cup
            of coffee — giving your business a significant competitive advantage.
          </P>
          <br />

          <H2>Up next: something impactful!</H2>
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
