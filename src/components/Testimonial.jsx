import React from 'react'

import { Image, P, Span } from '@core'

import Card from '@components/Card'

import { colors, fontDefaults } from '@const'

const s = {
  top: {
    display: 'table',
    width: '100%',
  },
  left: {
    float: 'left',
    textAlign: 'left',
    width: 100,
  },
  name: {
    ...fontDefaults,
    color: colors.gray,
    fontSize: 14,
    lineHeight: '14px',
    letterSpacing: '-0.04em',
  },
  jobTitle: {
    ...fontDefaults,
    color: colors.lightGray,
    fontSize: 14,
    lineHeight: '14px',
    letterSpacing: '-0.04em',
  },
  right: {
    float: 'right',
    width: 48,
    height: 48,
  },
  text: {
    ...fontDefaults,
    fontSize: 14,
    textAlign: 'left',
    marginBottom: 8,
  },
  hashtags: {
    display: 'table',
  },
  hashtag: {
    ...fontDefaults,
    fontSize: 12,
    color: colors.gray,
    marginRight: 4,
  },
}

export default function main(props) {
  return (
    <Card>
      <div style={s.top}>
        <div style={s.left}>
          <Span style={s.name}>{props.name}</Span>
          <div>
            <Span style={s.jobTitle}>{props.jobTitle}</Span>
          </div>
        </div>
        <div style={s.right}>
          <Image src={props.img} alt={props.name} />
        </div>
      </div>
      <div style={s.bottom}>
        <P style={s.text}>{props.children}</P>
      </div>
      {props.hashtags ? (
        <div style={s.hashtags}>
          {props.hashtags.map((hashtag) => (
            <Span key={s.hashtag} style={s.hashtag}>
              #{hashtag}
            </Span>
          ))}
        </div>
      ) : null}
    </Card>
  )
}
