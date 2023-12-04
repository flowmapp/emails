const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const puppeteer = require('puppeteer')
const config = require('./webpack.config.js')

const server = new WebpackDevServer(webpack(config))

const port = config.devServer.port || 3002

server.listen(port, 'localhost', async () => {
  const browser = await puppeteer.launch({ headless: 'new' })
  const context = browser.defaultBrowserContext()
  await context.overridePermissions(`http://localhost:${port}`, [
    'clipboard-read',
    'clipboard-write',
  ])
  const page = await browser.newPage()

  await page.goto(`http://localhost:${port}`)
  await page.waitForSelector('textarea')
  const emails = await page.evaluate(() =>
    [...document.querySelectorAll('textarea')].map((ta) => ({
      name: ta.id
        .replace(/\.jsx/, '.ejs')
        .replace(
          /^([A-Z]{1})(.*)/,
          (_, firstLetter, rest) => `${firstLetter.toLowerCase()}${rest}`,
        ),
      content: ta.value,
    })),
  )

  emails.forEach((email) => {
    console.info(`Building email ${email.name}`)
    fs.writeFileSync(path.resolve(__dirname, 'dist', email.name), email.content, 'utf-8')
  })

  await browser.close()
  process.exit(0)
})
