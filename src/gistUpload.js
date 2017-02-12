const Octokat = require('octokat')

module.exports = ({ clipboard }) => {
  return (query, { token }) => {
    const octo = new Octokat({ token })
    const gist = clipboard.readText()
    const fileName = query || 'gistfile1.txt'
    return octo.gists.create({
      description: 'Personal Gist',
      public: false,
      files: {
        [fileName]: {
          content: gist,
        }
      },
    }).then((res) => {
      return res.htmlUrl
    }).catch(() => {
      return 'You have an invalid token'
    })
  }
}
