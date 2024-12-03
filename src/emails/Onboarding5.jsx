import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors, fontDefaults } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P, Tip } from '@core'

import addComment from '@static/onboarding5/addComment.png'
import collaboration from '@static/onboarding5/collaboration.jpg'
import figma from '@static/onboarding5/figma.jpg'
import people from '@static/onboarding5/people.png'
import pencil from '@static/onboarding5/pencil.png'
import preview from '@static/onboarding5/preview.png'
import progress from '@static/onboarding5/progress.jpg'
import prototype from '@static/onboarding5/prototype.jpg'
import template from '@static/onboarding5/template.jpg'
import tileAdd from '@static/onboarding5/tileAdd.png'
import wireframes from '@static/onboarding5/wireframes.jpg'

const s = {
  blackBlockWrapper: {
    width: '33%',
    display: 'inline-block',
    paddingRight: 6,
  },
  blackBlock: {
    backgroundColor: colors.black,
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
  },
  blackBlockHeader: {
    color: colors.darkGray,
  },
  blackBlockText: {
    color: colors.white,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 2,
    float: 'left',
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
          <Chip style={{ marginRight: 8 }}>Step 3</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+30%</Chip>
          <H1>Wowframes: how high-fidelity wireframes change the game 💫</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>
            Wireframes work wonders for website sales because they show your clients that
            you&apos;ve already completed 50% of the work.
          </H2>
          <br />

          <H3>Why don&apos;t more agencies include wireframes in their proposals?</H3>
          <br />
          <div>
            <div style={s.blackBlockWrapper}>
              <div style={s.blackBlock}>
                <H1 style={s.blackBlockHeader}>01</H1>
                <H3 style={s.blackBlockText}>Lack of resources for a dedicated designer</H3>
              </div>
            </div>
            <div style={s.blackBlockWrapper}>
              <div style={s.blackBlock}>
                <H1 style={s.blackBlockHeader}>02</H1>
                <H3 style={s.blackBlockText}>
                  High cost of development
                  <br />
                  &nbsp;
                </H3>
              </div>
            </div>
            <div style={s.blackBlockWrapper}>
              <div style={s.blackBlock}>
                <H1 style={s.blackBlockHeader}>03</H1>
                <H3 style={s.blackBlockText}>
                  Time-consuming process
                  <br />
                  &nbsp;
                </H3>
              </div>
            </div>
          </div>
          <H2>How to optimize the process:</H2>
          <br />

          <Image src={people} alt="people" style={s.icon} />
          <H3>Empower your team</H3>
          <P>
            Sales, account, or project managers can create detailed prototypes without needing extra
            resources. With Flowmapp&apos;s wireframe feature, anyone can build full prototypes in
            minutes.
          </P>
          <br />
          <Image borderRadius={16} src={wireframes} alt="wireframes" style={s.image} />

          <Image src={preview} alt="preview" style={s.icon} />
          <H3>Always start with prototypes</H3>
          <P>
            Prototypes allow for precise project scoping from the earliest stage, making budgeting
            and planning easier.
          </P>
          <br />
          <Image borderRadius={16} src={prototype} alt="prototype" style={s.image} />

          <Image src={tileAdd} alt="Tile Add" style={s.icon} />
          <H3>Build reusable templates</H3>
          <P>
            Save sitemaps and prototypes as templates for common project types, so you can start new
            projects quickly.
          </P>
          <br />
          <Image borderRadius={16} src={template} alt="template" style={s.image} />
          <Tip>
            💡 Speed up the proposal process even further by using templates. The better your sales
            offers, and the more clients you reach, the better your conversion rate and revenue.
          </Tip>
          <br />

          <Image src={addComment} alt="Add Comment" style={s.icon} />
          <H3>Collaborate in real-time</H3>
          <P>
            Discuss the proposal with clients, make changes, and finalize details on the spot. This
            builds trust and engagement.
          </P>
          <br />
          <Image borderRadius={16} src={collaboration} alt="collaboration" style={s.image} />

          <Image src={pencil} alt="pencil" style={s.icon} />
          <H3>Bring in the designer at the final stage</H3>
          <P>
            Once the client has approved the project, export the prototypes to Figma for quick
            adaptation by your UI designer. This method keeps costs down and maximizes efficiency.
          </P>
          <br />
          <Image borderRadius={16} src={figma} alt="export to figma" style={s.image} />
          <Tip>
            💡 Use Flowmapp AI to generate a sitemap with wireframes for each page. Fill in project
            details, make buttons clickable, and spend just one hour refining it. Send this to the
            client — it&apos;ll make a lasting impression.
          </Tip>
          <br />

          <H2>Next email, next cool insights. See you soon!</H2>
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
