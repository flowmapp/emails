import React from 'react'

import Main from '@layouts/Main'

import { A, Button, Container, H2, P } from '@core'

export default function main(props) {
  return (
    <Main preview={props.preview}>
      <Container>
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

        <Button href="/upgrade">Upgrade now</Button>

        <H2>Have questions about upgrading?</H2>
        <P>
          <A
            inline
            href="https://help.flowmapp.com/faq_category/pricing/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
            color="blue"
          >
            Here are some answers
          </A>
          . Let us know if there&lsquo;s anything we can do and you need an extra week to explore
          more.
        </P>
        <P>We&lsquo;ll be here when you&lsquo;re ready.</P>
      </Container>
    </Main>
  )
}
