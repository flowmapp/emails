const path = require('path')
const fs = require('fs')

const BASE_PATH = path.resolve(__dirname, '../../static')

const getFilesRecursively = (currentDir) => {
  const fullPath = path.resolve(`${BASE_PATH}/${currentDir}`)
  const fileNames = fs.readdirSync(fullPath).filter((name) => name !== '.DS_Store')
  return [
    ...fileNames.map((fileName) => `${currentDir}/${fileName}`),
    ...fileNames
      .map((fileName) => {
        const filePath = path.resolve(`${BASE_PATH}${currentDir}/${fileName}`)
        const isFile = fs.lstatSync(filePath).isFile()
        return isFile ? null : getFilesRecursively(`${currentDir}/${fileName}`)
      })
      .flat()
      .filter((value) => value),
  ]
}

module.exports = () =>
  getFilesRecursively('')
    .filter((relPath) => fs.lstatSync(path.resolve(`${BASE_PATH}/${relPath}`)).isFile())
    .map((fileRelPath) => ({
      path: fileRelPath.replace(/^\//, ''),
      size: fs.lstatSync(path.resolve(`${BASE_PATH}/${fileRelPath}`)).size,
    }))
