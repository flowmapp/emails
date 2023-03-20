const aws = require('aws-sdk')

const spacesEndpoint = new aws.Endpoint(process.env.AWS_S3_ENDPOINT)
const s3 = new aws.S3({ endpoint: spacesEndpoint })
const bucketParams = {
  Bucket: process.env.AWS_S3_BUCKET,
}

const getPage = async (continuationToken) => {
  const data = await s3
    .listObjectsV2({
      ...bucketParams,
      ContinuationToken: continuationToken,
    })
    .promise()

  if (data.IsTruncated) {
    return [...data.Contents, ...(await getPage(data.NextContinuationToken))]
  }
  return data.Contents
}

module.exports = async () => {
  const files = await getPage()
  return files
    .map(({ Key, Size }) => ({ path: Key, size: Size }))
    .filter(({ path }) => !path.match(/\/$/))
}
