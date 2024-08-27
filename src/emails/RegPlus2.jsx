import React from 'react'

import Marketing from '@layouts/Marketing'

import { contentPadding } from '@const'

import { BInverted, Button, Card, Container, H2, P } from '@core'

import CardComponent from '@components/Card'
import Checklist from '@components/Checklist'

const s = {
  main: {
    paddingBottom: 0,
  },
  header: {
    paddingLeft: contentPadding,
    marginBottom: 48,
  },
  alignLeft: {
    textAlign: 'left',
  },
  card: {
    display: 'inline-block',
    width: 340,
    paddingLeft: 48,
    paddingRight: 48,
  },
  cardTitle: {
    fontSize: 22,
    marginBottom: 8,
  },
  cardText: {
    fontSize: 12,
    marginBottom: 28,
  },
  button: {
    width: '100%',
  },
}

export default function main(props) {
  const checklistItems = [
    { title: 'Create sitemap project', description: 'Open your bird-eye view', checked: true },
    { title: 'Create 5 user flow elements', description: 'Feel the Flow, be in the Flow' },
    { title: 'Send an invite', description: 'Time to meet up!' },
    { title: 'Create 5 pages', description: "You just don't stop, do you?" },
    { title: 'Create 10 wireframe blocks', description: 'Destroy final boss and get the prize' },
  ]

  return (
    <Marketing preview={props.preview} style={s.main}>
      <Card>
        <div style={s.header}>
          <H2 style={s.alignLeft}>
            Follow 5 easy steps and get a&nbsp;<BInverted style={s.stories}>bonus!</BInverted>
          </H2>
        </div>
        <Container>
          <CardComponent style={s.card}>
            <H2 style={s.cardTitle}>Get 15% discount!</H2>
            <P style={s.cardText}>
              Hi, Jedi. This is the beginning of your power path towards amazing UX, UI and IA
              planning. Follow the steps to achieve the goal
            </P>
            <Checklist items={checklistItems} />
            <Button style={s.button} href="/personal">
              Rock them all!
            </Button>
          </CardComponent>
        </Container>
      </Card>
    </Marketing>
  )
}
