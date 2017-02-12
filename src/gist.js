module.exports = () => {
  return (query) => {
    return Promise.resolve([
      {
        icon: 'fa-github-alt',
        title: 'Create gist from clipboard',
        subtitle: query,
        value: query,
      }
    ])
  }
}
