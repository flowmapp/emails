import React, { useEffect, useState } from 'react'

import renderEmail from '@utils/renderEmail'

const emails = JSON.parse(process.env.emails)

export default function main() {
  const [emailHTMLs, setEmailHTMLs] = useState([])

  useEffect(() => {
    ;(async () => {
      const emailHTMLs = []
      // eslint-disable-next-line no-restricted-syntax
      for (const filename of emails) {
        // eslint-disable-next-line global-require, no-await-in-loop, import/no-dynamic-require
        const Component = await require(`./emails/${filename}`).default

        emailHTMLs.push({
          filename,
          html: renderEmail(Component),
        })
      }
      setEmailHTMLs(emailHTMLs)
    })()
  }, [])

  return emailHTMLs.map((emailHTML) => (
    <textarea key={emailHTML.filename} id={emailHTML.filename} defaultValue={emailHTML.html} />
  ))
}
