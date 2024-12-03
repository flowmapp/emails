import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P, Tip } from '@core'

import content from '@static/onboarding3/content.jpg'
import insteadOfThis from '@static/onboarding3/insteadOfThis.jpg'
import progress from '@static/onboarding3/progress.jpg'
import sitemap from '@static/onboarding3/sitemap.jpg'
import stars from '@static/onboarding3/stars.png'
import willChooseThis from '@static/onboarding3/willChooseThis.jpg'

const s = {
  image: {
    marginBottom: 32,
  },
  key1Image: {
    width: 260,
    marginBottom: 32,
  },
  stars: {
    width: 20,
    height: 20,
    marginRight: 8,
    marginTop: 1,
    float: 'left',
  },
}

export default function main(props) {
  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <Chip style={{ marginRight: 8 }}>Step 1</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+10%</Chip>
          <H1>Make it visual 🚀</H1>
          <P>
            Increase sales with comprehensive commercial proposals showcasing the structure and
            design of the future website
          </P>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>4 key principles that win clients for your agency</H2>
          <br />

          <Image src={stars} alt="stars" style={s.stars} />
          <H3>Key Principle 1 — Сlient buys with their eyes</H3>
          <P>
            Don&apos;t just tell - show! Visualize the project from the very first step to
            demonstrate your interest, expertise, and commitment to thorough planning.
          </P>
          <br />
          <Image
            borderRadius={16}
            src={insteadOfThis}
            alt="Instead of this"
            style={{ ...s.image, ...s.key1Image, marginRight: 6 }}
          />
          <Image
            borderRadius={16}
            src={willChooseThis}
            alt="Client will choose this"
            style={{ ...s.image, ...s.key1Image }}
          />
          <Tip>
            💡 Use Flowmapp AI to quickly create sitemaps with ready-made page prototypes, building
            a visual structure in minimal time.
          </Tip>

          <Image src={stars} alt="stars" style={s.stars} />
          <H3>Key Principle 2 — Clients value thoroughness</H3>
          <P>
            Present a well-crafted proposal: include visual structure, an overview, comments, mood
            boards, and a commercial offer. Clients want to see what they&apos;re investing in. Keep
            it concise-deliver interactive, visual proposals with Flowmapp&apos;s visual sitemap
            tool, adding notes and mood boards to each page.
          </P>
          <br />
          <Image borderRadius={16} src={sitemap} alt="sitemap" style={s.image} />

          <Image src={stars} alt="stars" style={s.stars} />
          <H3>Key Principle 3 — Clients respect expertise</H3>
          <P>
            Showcase your expertise by preparing a project scope with Flowmapp&apos;s content tool,
            assessing the project from the start with the estimation tool, identifying potential
            weak points, and curating a mood board - all within the Flowmapp interface.
          </P>
          <br />
          <Image borderRadius={16} src={content} alt="content" style={s.image} />

          <Image src={stars} alt="stars" style={s.stars} />
          <H3>Key Principle 4 — Clients want to be impressed</H3>
          <P>
            Initial decisions are often influenced by team members like secretaries or project
            managers rather than key stakeholders. Make your proposal memorable - surprise and
            engage them with a unique approach. This will put your agency at the top of their list.
          </P>
          <br />

          <H2>
            In the next email, we&apos;ll show you how to make UX your unique advantage without
            using extensive resources.
          </H2>
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
