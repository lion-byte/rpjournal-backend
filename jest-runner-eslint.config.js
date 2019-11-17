const { resolve } = require('path')

module.exports = {
  cliOptions: {
    ignorePath: resolve(__dirname, './.gitignore')
  }
}
