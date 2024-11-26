import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { Button, Card, Chip, Container, H1, H2, H3, Image, P } from '@core'

import progress from '@static/onboarding9/progress.jpg'
import sitemap from '@static/onboarding9/sitemap.jpg'
import tags from '@static/onboarding9/tags.jpg'

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
          <Chip style={{ marginRight: 8 }}>Step 7</Chip>
          <Chip style={{ backgroundColor: colors.green }}>+100%</Chip>
          <H1>The must-do&apos;s 📋</H1>
        </Card>

        <br />

        <Card style={{ textAlign: 'left' }}>
          <H2>Let&apos;s give this one more read and make sure we&apos;re all on the same page</H2>
          <P>Because without the pillars, even the best tools won&apos;t make the business run</P>
          <Image borderRadius={16} src={sitemap} alt="sitemap" style={s.image} />
          <br />

          <H3>1. Make a great first impression</H3>
          <P>
            Start strong to build lasting momentum. Leave clients with a powerful first impression.
          </P>
          <br />

          <H3>2. Be consistently professional</H3>
          <P>Respond promptly, and avoid surprises that could catch clients off guard.</P>
          <br />

          <H3>3. Share progress updates</H3>
          <P>
            Don&apos;t wait for perfection. Sharing drafts shows progress and keeps engagement high.
          </P>
          <br />

          <H3>4. Create a mini-timeline</H3>
          <P>Explain each stage&apos;s timing to boost confidence and offer a sense of control.</P>
          <br />

          <H3>5. Offer extra value</H3>
          <P>
            Suggest future improvements or opportunities. Clients appreciate forward-thinking
            partners.
          </P>
          <br />

          <H3>6. Provide constructive advice</H3>
          <P>If a client&apos;s idea has potential pitfalls, offer alternatives with tact.</P>
          <br />

          <H3>7. Focus on aesthetics</H3>
          <P>From presentations to emails, professional visuals matter.</P>
          <br />

          <H3>8. Stay proactive</H3>
          <P>
            Share new ideas and updates before clients even ask. Show them you&apos;re truly
            invested.
          </P>
          <br />

          <H3>9. Highlight value, not just process</H3>
          <P>Emphasize how your solutions bring tangible benefits.</P>
          <br />

          <H3>10. Address challenges early</H3>
          <P>Proactively identify risks instead of allowing last-minute surprises.</P>
          <br />

          <H3>11. Train your client&apos;s team</H3>
          <P>Show them how to use your product or service, building strong connections.</P>
          <br />

          <H3>12. Deliver ready-to-use materials</H3>
          <P>Templates, style guides, and recommendations go a long way.</P>
          <br />

          <H3>13. Express gratitude</H3>
          <P>Acknowledge clients&apos; collaboration and show your appreciation.</P>
          <br />

          <H3>14. Don&apos;t forget to thank your team</H3>
          <br />

          <H3>15. Work with people, who think like you</H3>
          <br />
          <Image borderRadius={16} src={tags} alt="tags" style={s.image} />

          <H2>
            You made it to the finish line!
            <br />
            We knew you had it in you!
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
