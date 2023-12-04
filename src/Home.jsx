import React from 'react'
import { Link } from 'react-router-dom'

import HTML from './HTML'

export default function main() {
  const emails = JSON.parse(process.env.emails)
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {emails.map((filename) => (
          <Link key={filename} to={filename.toLowerCase().replace('.jsx', '')}>
            {filename}
          </Link>
        ))}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <HTML />
      </div>
    </>
  )
}
