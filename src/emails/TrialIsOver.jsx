import React from 'react'

import System from '@layouts/System'

import { A, Button, Card, Container, H2, ImageBlock, P, TextBlock } from '@core'

export default function main(props) {
  return (
    <System preview={props.preview}>
      <Container>
        <Card>
          <ImageBlock>🥺</ImageBlock>

          <TextBlock>
            <H2>Trial is over</H2>
            <P>
              We hope you&lsquo;ve enjoyed the experience — take the next step in building your
              projects. Our UX tools are here to help you.
              <br />
              Learn more about&nbsp;
              <A
                inline
                href="https://flowmapp.com/pricing/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
                color="blue"
              >
                plans and pricing
              </A>
              .
            </P>
          </TextBlock>

          <Button wide href="/upgrade">
            Upgrade now
          </Button>
        </Card>

        <Card>
          <TextBlock>
            <H2>Have questions about upgrading?</H2>
            <P>
              Let us know if there&lsquo;s anything we can do and you need an extra week to explore
              more.
            </P>
          </TextBlock>
          <Button
            wide
            secondary
            href="https://help.flowmapp.com/faq_category/pricing/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
          >
            View answers
          </Button>
        </Card>
      </Container>
    </System>
  )
}
