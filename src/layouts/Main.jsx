import React from 'react'

import { A, Image, Span } from '@components'

import dottedBackground from '@static/common/dottedBackground.jpg'
import instagram from '@static/common/instagram.png'
import linkedin from '@static/common/linkedin.png'
import logo from '@static/common/logo.png'
import medium from '@static/common/medium.png'
import twitter from '@static/common/twitter.png'

import { colors, contentPadding, fontDefaults } from '@const'

const s = {
  body: {
    width: 840,
    backgroundColor: colors.white,
    paddingTop: 48,
    paddingBottom: 100,
  },
  logoLink: {
    float: 'none',
  },
  logo: {
    width: 152,
    marginBottom: 28,
    boxSizing: 'content-box',
  },
  content: {
    backgroundImage: `url(${dottedBackground})`,
    backgroundPositionX: 10,
    backgroundPositionY: 10,
    backgroundSize: 39,
    backgroundRepeat: 'repeat',
    padding: contentPadding,
    marginBottom: 48,
    borderRadius: 32,
    textAlign: 'center',
    maxWidth: 600,
    paddingBottom: 16,
  },
  socials: {
    display: 'table',
    marginBottom: 48,
  },
  social: {
    float: 'left',
    width: 36,
    marginRight: 28,
  },
  footerSpan: {
    marginBottom: 24,
  },
  footerLinks: {
    display: 'table',
  },
  footerLink: {
    ...fontDefaults,
    color: '#bababa',
    textDecoration: 'none',
    marginRight: 16,
    fontSize: 12,
  },
}

export default function main(props) {
  const unsubscribeLink = props.preview ? '/unsubscribe' : '%%unsubscribeLink%%'

  const renderSocial = ({ href, img, alt }) => (
    <A style={s.social} href={href}>
      <Image src={img} alt={alt} />
    </A>
  )

  return (
    <table style={s.body}>
      <tbody>
        <tr>
          <td align="center">
            <A
              style={s.logoLink}
              href="https://www.flowmapp.com/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
            >
              <Image style={s.logo} src={logo} alt="logo" />
            </A>
            <div style={s.content}>{props.children}</div>
            <div style={s.socials}>
              {renderSocial({ href: 'https://twitter.com/flowmapp', img: twitter, alt: 'twitter' })}
              {renderSocial({ href: 'https://medium.com/@flowmapp', img: medium, alt: 'medium' })}
              {renderSocial({
                href: 'https://linkedin.com/company/flowmapp',
                img: linkedin,
                alt: 'linkedin',
              })}
              {renderSocial({
                href: 'https://instagram.com/flowmapp',
                img: instagram,
                alt: 'instagram',
              })}
            </div>
            <div style={s.footer}>
              <div style={s.footerSpan}>
                <Span>Over 300,000 makers use FlowMapp to create amazing products.</Span>
              </div>
              <div style={s.footerLinks}>
                <A
                  style={s.footerLink}
                  href="https://help.flowmapp.com/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
                >
                  Help Center
                </A>
                <A
                  style={s.footerLink}
                  href="https://flowmapp.com/privacy/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%"
                >
                  Privacy Policy
                </A>
                <A style={s.footerLink} href={unsubscribeLink}>
                  Unsubscribe
                </A>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
