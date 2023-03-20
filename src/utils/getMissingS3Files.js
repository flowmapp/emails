module.exports = ({ s3Files, localFiles }) =>
  localFiles.filter(({ path, size }) => {
    const s3File = s3Files.find(({ path: s3Path }) => s3Path === path)
    return !s3File || s3File.size !== size
  })
