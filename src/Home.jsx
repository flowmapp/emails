import React from 'react'
import { Link } from 'react-router-dom'

export default function main() {
  const emails = JSON.parse(process.env.emails)
  return emails.map((filename) => (
    <Link key={filename} to={filename.toLowerCase().replace('.jsx', '')}>
      {filename}
    </Link>
  ))
}
