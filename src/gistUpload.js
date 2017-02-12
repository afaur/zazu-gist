const octo = require('octokat')
module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return query.match(/\d/)
    },
    search: (query, env = {}) => {
      return new Promise((resolve, reject) => {
        const result = octo.gists.create({
          "description":"Test Gist",
          "public":false,
          "files":{
            "gistfile1.txt":{
              "content":"Hello World"
            }
          }
        })
        resolve([
          {
            icon: 'fa-github-alt',
            title: result,
            subtitle: '',
            value: '',
          }
        ])
      })
    },
  }
}
