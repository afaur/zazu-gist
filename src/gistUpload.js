const Octokat = require('octokat')
module.exports = (pluginContext) => {
  return (query, env = {}) => {
    const { cwd, console } = pluginContext
    return new Promise((resolve, reject) => {
      const clipboard = pluginContext.clipboard
      const gist = clipboard.readText()
      const octo = new Octokat({token: env.token})
      const obj = {
        "description":"Personal Gist",
        "public":false,
        "files":{
        }
      }
      obj['files'][query] = {
        "content": gist
      }
      const result = octo.gists.create(obj)
      resolve([
        {
          icon: 'fa-github-alt',
          title: result,
          subtitle: '',
          value: '',
        }
      ])
    })
  }
}
