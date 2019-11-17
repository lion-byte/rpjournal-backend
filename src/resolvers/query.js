const { forwardTo } = require('prisma-binding')

const { db } = require('../db')

const Query = {
  async me (parent, args, ctx, info) {
    // Check for user ID
    const { userId } = ctx.req

    if (!userId) {
      return null
    }

    return db.query.user({ where: { id: userId } }, info)
  },

  adventure: forwardTo('db'),
  session: forwardTo('db'),
  quest: forwardTo('db')
}

module.exports = { Query }
