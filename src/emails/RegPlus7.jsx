import React from 'react'

import Marketing from '@layouts/Marketing'

import { colors } from '@const'

import { B, Button, Card, Container, H1, Span } from '@core'

const s = {
  main: {
    paddingTop: 24,
    paddingBottom: 0,
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
}

export default function main(props) {
  return (
    <Marketing preview={props.preview} style={s.main}>
      <Card>
        <Container>
          <H1 style={s.heading}>
            <i>
              Upgrade your planning skills,&nbsp;
              <B style={s.span}>
                increase profits and just enjoy a limited 15% discount on FlowMapp PRO
              </B>
            </i>
          </H1>
          <div style={s.promoWrapper}>
            <Span style={s.title}>Your promo code</Span>
            <div style={s.promo}>
              <Span style={s.code}>flowPRO</Span>
              <div style={s.dot} />
            </div>
          </div>
          <Button wide style={s.button} href="/upgrade">
            Activate
          </Button>
        </Container>
      </Card>
    </Marketing>
  )
}
