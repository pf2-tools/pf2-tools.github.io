const classes = (...vals) => vals.map(val => {
  if (typeof val === 'object'){
    return Object.entries(val)
      .map(([name, check]) => check && name)
      .filter(v => !!v)
  }
  return [val]
})
.reduce((accum, val) => accum.concat(val))
.join(' ')

export { classes }
