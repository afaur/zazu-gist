module.exports = (pluginContext) => {
  return (query, env = {}) => {
    const { cwd, console } = pluginContext
    return new Promise((resolve, reject) => {
      resolve([
        {
          icon: 'fa-github-alt',
          title: query,
          subtitle: 'Create gist from clipboard',
          value: query,
        }
      ])
    })
  }
}
