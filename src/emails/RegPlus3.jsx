import React from 'react'

import Main from '@layouts/Main'

import { B, Button, H2, P } from '@core'

import Testimonial from '@components/Testimonial'

import ChrisFrantz from '@static/regPlus3/ChrisFrantz.png'
import FabricioTeixeira from '@static/regPlus3/FabricioTeixeira.png'
import IvanPalii from '@static/regPlus3/IvanPalii.png'
import MattRossi from '@static/regPlus3/MattRossi.png'
import NikitaVidineev from '@static/regPlus3/NikitaVidineev.png'
import Outline2Design from '@static/regPlus3/Outline2Design.png'
import RufusAndreasPlattner from '@static/regPlus3/RufusAndreasPlattner.png'
import SebastianBelle from '@static/regPlus3/SebastianBelle.png'

const s = {
  testimonials: {
    display: 'table',
  },
  column: {
    width: '50%',
    float: 'left',
    padding: 8,
    marginBottom: 28,
  },
  leftColumn: {
    paddingTop: 100,
  },
}

export default function main(props) {
  return (
    <Main preview={props.preview}>
      <H2>
        Real users. Real&nbsp;<B>stories</B>
      </H2>
      <P>
        Real stories from teams and users on how the FlowMapp improved
        <br />
        its level of planning, UX strategy, productivity, and increased its profit
      </P>
      <div style={s.testimonials}>
        <div style={{ ...s.column, ...s.leftColumn }}>
          <Testimonial name="Ivan Pallii" jobTitle="ivanpalii.com" img={IvanPalii}>
            This a great tool to create architecture of the website. This is one of the most
            important and the first steps before launching any product/website. Thanks, guys, for
            awesome app.
          </Testimonial>
          <Testimonial name="Sebastian Bellé" jobTitle="" img={SebastianBelle}>
            <B>@flowmapp</B>&nbsp;ist mein absolutes Lieblingstool zur Website und Blog-Planung.
            Besonders gut - kostenfreie Nutzung bei einem Projekt.
          </Testimonial>
          <Testimonial name="Nikita Vidineev" jobTitle="Ailove" img={NikitaVidineev}>
            Very useful tool for managers and art-directors
          </Testimonial>
          <Testimonial
            name="Rufus Andreas Plattner"
            jobTitle="ruffadelic.net"
            img={RufusAndreasPlattner}
            hashtags={['ux', 'tools']}
          >
            Was looking for a fast way to map a complex project for a while now. Really happy to
            have come across&nbsp;<B>@flowmapp</B>&nbsp;today.
          </Testimonial>
        </div>
        <div style={s.column}>
          <Testimonial name="Chris Frantz" jobTitle="presskite.com" img={ChrisFrantz}>
            This looks amazing. Finally I can stop using mind maps to hack together a site map.
          </Testimonial>
          <Testimonial name="Fabricio Teixeira" jobTitle="uxdesign.cc" img={FabricioTeixeira}>
            FlowMapp – Powerful visual sitemap tool for planning website development and collaborate
            with others
          </Testimonial>
          <Testimonial name="Matt Rossi" jobTitle="Matt Rossi" img={MattRossi}>
            <B>@juhsee</B>&nbsp;found this gem, so far this has been an amazing tool&nbsp;
            <B>@flowmapp</B>
          </Testimonial>
          <Testimonial name="Outline2Design" jobTitle="outline2design.com" img={Outline2Design}>
            The design process of the site has been delayed again? Absolutely not enough time? Burn
            down deadlines? We recommend an excellent service that facilitates the whole process of
            splitting.
          </Testimonial>
        </div>
      </div>
      <Button
        style={s.getStarted}
        href="https://www.flowmapp.com/reviews?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
      >
        Reviews
      </Button>
    </Main>
  )
}
