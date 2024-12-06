import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors, fontDefaults } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P, Tip } from '@core'

import progress from '@static/onboarding4/progress.jpg'
import sitemap from '@static/onboarding4/sitemap.jpg'
import userflow from '@static/onboarding4/userflow.jpg'
import userflow2 from '@static/onboarding4/userflow2.jpg'

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
          <Chip style={{ marginRight: 8 }}>Step 2</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+15%</Chip>
          <H1>User experience — what clients truly value 💎</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>
            Sell user experience - not just user interface. Clients pay for a carefully designed
            flow because it&apos;s a proof that their website and UI will work effectively.
          </H2>
          <br />

          <H3>3 WHY that block clients:</H3>
          <br />
          <div style={s.blackBlock}>
            <H1 style={s.blackBlockHeader}>01</H1>
            <H3 style={s.blackBlockText}>Why is this so expensive?</H3>
          </div>
          <div style={s.blackBlock}>
            <H1 style={s.blackBlockHeader}>02</H1>
            <H3 style={s.blackBlockText}>Why does it take so long?</H3>
          </div>
          <div style={s.blackBlock}>
            <H1 style={s.blackBlockHeader}>03</H1>
            <H3 style={s.blackBlockText}>Why should I trust you?</H3>
          </div>
          <H3>
            Solution:
            <br />
            Visualize! Show the level of planning required for their project. Conduct a use-case
            analysis and map out the user flow.
          </H3>
          <br />
          <Image borderRadius={16} src={userflow} alt="userflow" style={s.image} />
          <Tip>
            💡 Even a simple registration can demand significant resources. Use the user flow tool
            to map it out and demonstrate to the client.
          </Tip>

          <H3>Focus on UX 👨‍💻</H3>
          <P>
            Investing time in initial planning increases your chances of building a long-term client
            relationship. By focusing on user experience, you can accurately estimate the project
            scope, allocate resources efficiently, and establish expert-level communication.
            Remember, clients pay not for questions but for answers and solutions.
          </P>
          <br />
          <Image borderRadius={16} src={sitemap} alt="sitemap" style={s.image} />

          <H3>Focus on the clients&apos;s goals 🎯</H3>
          <P>
            With Flowmapp&apos;s tools, you can also use these pages to create a user flow, visually
            guiding clients through the steps users will take on specific pages.
          </P>
          <br />
          <Image borderRadius={16} src={userflow2} alt="userflow" style={s.image} />

          <H3>Who should do this? 🤔</H3>
          <ol style={s.list}>
            <li>
              If you have a UX specialist, our tool helps them streamline UX planning and save time.
            </li>
            <li>
              A project manager can quickly create a user flow without special skills, saving team
              resources.
            </li>
            <li>
              A sales manager can draft a simple site structure using our AI, even without advanced
              expertise. It serves as a powerful starting point to engage clients, sparking
              discussions that can lead to a contract. The AI-generated sitemap can be a foundation
              that you refine after securing the project and budget.
            </li>
          </ol>
          <br />

          <H2>Stay tuned! In the next email, we&apos;ll dive into high-fidelity wireframes.</H2>
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
