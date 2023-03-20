require('dotenv').config()
const aws = require('aws-sdk')
const path = require('path')
const fs = require('fs')

const spacesEndpoint = new aws.Endpoint(process.env.AWS_S3_ENDPOINT)
const s3 = new aws.S3({ endpoint: spacesEndpoint })

const getLocalFiles = require('./getLocalFiles')
const getMissingS3Files = require('./getMissingS3Files')
const getS3Files = require('./getS3Files')

const main = async () => {
  const s3Files = await getS3Files()
  const localFiles = await getLocalFiles()
  const missingS3Files = getMissingS3Files({ s3Files, localFiles })

  for (const file of missingS3Files) {
    const buffer = fs.readFileSync(path.resolve(__dirname, '../../static', file.path))
    await s3.putObject(
      {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: file.path,
        Body: buffer,
        ACL: 'public-read',
      },
      (err, res) => {
        if (err) {
          console.error(err)
        } else {
          console.info(`Uploaded ${file.path}`)
        }
      },
    )
  }
}
main()
