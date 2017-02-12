module.exports = (pluginContext) => {
  return {
    respondsTo: (query) => {
      return true
    },
    search: (query, env = {}) => {
      return new Promise((resolve, reject) => {
        resolve([
          {
            icon: 'fa-github-alt',
            title: value,
            subtitle: 'Create gist from clipboard',
            value: value,
          }
        ])
      })
    },
  }
}
