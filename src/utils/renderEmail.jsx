import React from 'react'
import ReactDOMServer from 'react-dom/server'
import prettify from 'pretty'

export default (Component) => {
  const markup = ReactDOMServer.renderToStaticMarkup(<Component />)
  const html = process.env.html.replace('{{content}}', markup)
  return prettify(html.replace(/></g, '>\r\n<'))
    .replace(/%%%([^%]*)%%%/g, '<%-data["$1"]%>')
    .replace(/%%([^%]*)%%/g, '<%=data["$1"]%>')
    .replaceAll(`${window.location.origin}/static`, process.env.STATIC_BASE_URL)
}
