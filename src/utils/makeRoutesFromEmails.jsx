import React from 'react'

import Home from '../Home'

export default async () => {
  const emails = JSON.parse(process.env.emails)

  const routes = [{ path: '/', element: <Home /> }]
  // eslint-disable-next-line no-restricted-syntax
  for (const filename of emails) {
    // eslint-disable-next-line global-require, no-await-in-loop, import/no-dynamic-require
    const Component = await require(`../emails/${filename}`).default

    routes.push({
      path: filename.toLowerCase().replace('.jsx', ''),
      component: Component,
      element: <Component preview />,
    })
  }

  return routes
}
