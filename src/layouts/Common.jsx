import React from 'react'

import { A, Image, Span } from '@core'

import instagram from '@static/common/instagram.png'
import linkedin from '@static/common/linkedin.png'
import logo from '@static/common/logo.png'
import medium from '@static/common/medium.png'
import twitter from '@static/common/twitter.png'
import youTube from '@static/common/youtube.png'

import { colors, contentPadding, fontDefaults } from '@const'

export const commonFooterLinks = [
  {
    href: 'https://help.flowmapp.com/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%',
    title: 'Help Center',
  },
  {
    href: 'https://flowmapp.com/privacy/?utm_source=email&utm_medium=email&utm_campaign=%%utmCampaign%%',
    title: 'Privacy Policy',
  },
]

export default function main(props) {
  const s = {
    body: {
      width: '100%',
      backgroundColor: colors.lightGray,
      paddingTop: 32,
    },
    footer: {
      marginBottom: 32,
    },
    logoLink: {
      float: 'none',
    },
    logo: {
      width: 122,
      marginBottom: 32,
      boxSizing: 'content-box',
    },
    content: {
      maxWidth: 600,
    },
    socials: {
      display: 'table',
      padding: '32px 0',
    },
    social: {
      float: 'left',
      width: 36,
      marginRight: 28,
    },
    noMargin: {
      marginRight: 0,
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

  const renderSocial = ({ href, img, alt, noMargin }) => (
    <A style={{ ...s.social, ...(noMargin ? s.noMargin : {}) }} href={href}>
      <Image src={`${img}?v=4`} alt={alt} />
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
              <Image style={s.logo} src={`${logo}?v=3`} alt="logo" />
            </A>
            <div style={{ ...s.content, ...props.style }}>{props.children}</div>
            <div style={s.socials}>
              {renderSocial({ href: 'https://twitter.com/flowmapp', img: twitter, alt: 'twitter' })}
              {renderSocial({
                href: 'https://www.youtube.com/@FlowMapp',
                img: youTube,
                alt: 'YouTube',
              })}
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
                noMargin: true,
              })}
            </div>
            <div style={s.footer}>
              <div style={s.footerLinks}>
                {props.footerLinks.map((link) => (
                  <A key={link.title} style={s.footerLink} href={link.href}>
                    {link.title}
                  </A>
                ))}
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
