import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P, Tip } from '@core'

import badExample from '@static/onboarding6/badExample.jpg'
import goodExample from '@static/onboarding6/goodExample.jpg'
import invoice from '@static/onboarding6/invoice.jpg'
import progress from '@static/onboarding6/progress.jpg'
import wireframes from '@static/onboarding6/wireframes.jpg'

const s = {
  image: {
    marginBottom: 32,
  },
  inlineImage: {
    width: 260,
  },
}

export default function main(props) {
  const name = props.preview ? 'John' : '%%name%%'

  return (
    <Marketing preview={props.preview}>
      <Container>
        <Card>
          <Chip style={{ marginRight: 8 }}>Step 4</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+45%</Chip>
          <H1>Content is key 🔑</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>Key idea — I resonate more with what feels near</H2>
          <P>
            Clients can see right through generic, cookie-cutter content. If you want to truly
            capture their attention, make your commercial proposals personalized and relevant.
          </P>
          <br />
          <Image
            borderRadius={16}
            src={badExample}
            alt="bad example"
            style={{ ...s.image, ...s.inlineImage, marginRight: 6 }}
          />
          <Image borderRadius={16} src={goodExample} alt="good example" style={{ ...s.image, ...s.inlineImage }} />

          <H2>Why does it matter?</H2>
          <br />

          <H2>1. Personalization sparks a connection</H2>
          <P>Isn&apos;t that right, {name}?</P>
          <P>
            People feel valued when they see content created with them in mind. By weaving in
            elements of their brand, you show your commitment to their unique needs.
          </P>
          <br />
          <Image borderRadius={16} src={wireframes} alt="wireframes" style={s.image} />
          <Tip>
            💡 Bring prototypes to life by incorporating client logos and branding elements.
            Flowmapp&apos;s Wireframes tool makes this accessible to everyone on your team
          </Tip>

          <H2>2. Capture your client&apos;s attention</H2>
          <P>
            A wise samurai once said, &quot;Be the brightest poppy in a field of dandelions&quot;
          </P>
          <H3>Why this approach works:</H3>
          <P>
            Clients often juggle several proposals at once and tend to skim rather than read
            thoroughly. Crafting personalized, clear content that aligns with their goals makes your
            proposal stand out. It catches their eye, holds their focus, and leaves a lasting
            impression.
          </P>
          <br />
          <Image borderRadius={16} src={invoice} alt="invoice" style={s.image} />

          <H2>3. Clients need solutions</H2>
          <P>
            Meeting client expectations head-on gives you a decisive edge. When your content matches
            their business needs, it resonates as a ready-to-go solution.
          </P>
          <P>It&apos;s easy. It&apos;s profitable.</P>
          <P>And with Flowmapp, it&apos;s fast.</P>
          <br />

          <H2>Ready to take your next step?</H2>
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
