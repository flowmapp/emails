import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors, fontDefaults } from '@const'

import { B, Button, Card, Chip, Container, H1, H2, H3, Image, P, Tip } from '@core'

import collaboration from '@static/onboarding8/collaboration.jpg'
import progress from '@static/onboarding8/progress.jpg'

const s = {
  blackBlock: {
    display: 'inline-block',
    backgroundColor: colors.black,
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    marginRight: 6,
    width: 170,
  },
  blackBlockHeader: {
    color: colors.darkGray,
  },
  blackBlockText: {
    color: colors.white,
  },
  image: {
    marginBottom: 32,
  },
  list: {
    ...fontDefaults,
    paddingLeft: 20,
    fontSize: 16,
    lineHeight: '24px',
  },
}

export default function main(props) {
  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <Chip style={{ marginRight: 8 }}>Step 6</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+75%</Chip>
          <H1>Interact, don&apos;t Interrupt 🤝</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>
            The pre-sale stage is the cornerstone of all communication and is directly tied to
            profitability.
          </H2>
          <br />
          <H3>Core principles:</H3>
          <ol style={s.list}>
            <li>Build relationships through interaction</li>
            <li>Engage the client in the process</li>
            <li>
              Simulate the type of communication the client will experience during the project
            </li>
            <li>Present the project structure and your workflow clearly</li>
          </ol>
          <H3 style={{ color: colors.darkGray }}>
            A common concern from developers:{' '}
            <B style={{ color: colors.black }}>Where do we find the resources for this?</B> Many
            companies struggle to allocate dedicated managers for every client interaction.
          </H3>
          <br />
          <Image borderRadius={16} src={collaboration} alt="collaboration" style={s.image} />

          <H3>The Pareto Principle in Action:</H3>
          <br />
          <div style={s.blackBlock}>
            <H1 style={s.blackBlockHeader}>01</H1>
            <H3 style={s.blackBlockText}>
              80% of offers go to 20% of
              <br />
              agencies
            </H3>
          </div>
          <div style={s.blackBlock}>
            <H1 style={s.blackBlockHeader}>02</H1>
            <H3 style={s.blackBlockText}>20% of effort delivers 80% of the results</H3>
          </div>
          <div style={s.blackBlock}>
            <H1 style={s.blackBlockHeader}>03</H1>
            <H3 style={s.blackBlockText}>80% of clients need 20% of website types</H3>
          </div>

          <H2 style={{ color: colors.darkGray }}>
            The Solution: <B style={{ color: colors.black }}>Leverage Technology</B>
          </H2>
          <P>
            Here&apos;s how to establish professional communication in just 30 minutes to a few
            hours:
          </P>
          <br />

          <H3>1. Tools: Flowmapp AI Sitemap Builder + Wireframes</H3>
          <P>
            Use these tools to create a visual site structure and page prototypes in minutes. All it
            takes is a well-thought-out prompt and minor edits based on the client&apos;s inputs.
          </P>
          <P>
            Then, involve the client directly within the project: leave comments, ask questions, and
            build a collaborative environment.
          </P>
          <br />

          <H3>2. Tool: Notes</H3>
          <P>
            Import the client&apos;s brief into Flowmapp Notes. Build communication by asking
            clarifying questions and addressing specific points. Always document your discussions
            during meetings to ensure alignment.
          </P>
          <br />

          <H3>3. Tool: Estimation</H3>
          <P>
            Provide a cost estimate for the project and discuss it with the client. Walk them
            through why the project is valued at that price point.
          </P>
          <br />

          <Tip>
            💡 Pro Tip: Offer multiple pricing options:
            <br />
            1. Premium
            <br />
            2. Standard
            <br />
            3. Budget-Friendly
          </Tip>

          <H2>Next stop: the final masterpiece!</H2>
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
