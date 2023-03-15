import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { colors, fontDefaults } from '@const'

import getRouteComponent from '@utils/getRouteComponent'
import makeRoutesFromEmails from '@utils/makeRoutesFromEmails'
import renderEmail from '@utils/renderEmail'

const main = async () => {
  const routes = await makeRoutesFromEmails()
  const router = createBrowserRouter(routes)

  const onClick = async () => {
    const Component = getRouteComponent(routes)
    const html = renderEmail(Component)
    navigator.clipboard.writeText(html)
  }

  const s = {
    wrapper: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#777',
    },
    sideButton: {
      ...fontDefaults,
      backgroundColor: colors.blue,
      position: 'fixed',
      top: '5vh',
      cursor: 'pointer',
      padding: '4px 8px',
      fontSize: 12,
      textAlign: 'center',
      textTransform: 'uppercase',
      color: colors.white,
      border: 'none',
    },
  }

  ReactDOM.createRoot(document.getElementById('root')).render(
    <div style={s.wrapper}>
      <button type="submit" style={{ ...s.sideButton, right: 0 }} onClick={onClick}>
        Copy
      </button>
      <a style={{ ...s.sideButton, left: 0 }} href="/">
        Back
      </a>
      <RouterProvider router={router} />
    </div>,
  )
}

main()
