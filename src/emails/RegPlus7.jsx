import React from 'react'

import Main from '@layouts/Main'

import { colors } from '@const'

import { B, Button, Container, H2, Span } from '@core'

import bottomArrow from '@static/regPlus7/bottomArrow.png'
import topArrow from '@static/regPlus7/topArrow.png'

const s = {
  main: {
    paddingTop: 24,
    paddingBottom: 0,
  },
  topArrow: {
    backgroundImage: `url(${topArrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right top',
    backgroundSize: 270,
    height: 120,
  },
  heading: {
    marginBottom: 60,
  },
  span: {
    color: colors.gray,
  },
  promoWrapper: {
    marginBottom: 40,
  },
  promo: {
    display: 'inline-block',
    border: '2px dashed #5f7da0',
    borderRadius: 24,
  },
  title: {
    display: 'block',
    color: '#5f7da0',
    marginBottom: 8,
  },
  code: {
    display: 'block',
    float: 'left',
    color: '#5f7da0',
    fontSize: 22,
    lineHeight: '22px',
    padding: '10px 4px 10px 16px',
  },
  dot: {
    float: 'right',
    width: 30,
    height: 30,
    borderRadius: '50%',
    backgroundColor: '#5f7da0',
    margin: 5,
  },
  button: {
    paddingLeft: 48,
    paddingRight: 48,
  },
  bottomArrow: {
    backgroundImage: `url(${bottomArrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom center',
    backgroundSize: 100,
    height: 220,
  },
}

export default function main(props) {
  return (
    <Main preview={props.preview} style={s.main}>
      <div style={s.topArrow} />
      <Container>
        <H2 style={s.heading}>
          <i>
            Upgrade your planning skills,&nbsp;
            <B style={s.span}>
              increase profits and just enjoy a limited 25% discount on FlowMapp PRO
            </B>
          </i>
        </H2>
        <div style={s.promoWrapper}>
          <Span style={s.title}>Your promo code</Span>
          <div style={s.promo}>
            <Span style={s.code}>FlowPRO</Span>
            <div style={s.dot} />
          </div>
        </div>
        <Button style={s.button} href="https://app.flowmapp.com/updateplan?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%">
          Activate
        </Button>
      </Container>
      <div style={s.bottomArrow} />
    </Main>
  )
}
