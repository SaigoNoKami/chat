const fastify = require('fastify')
const ms_router = require('./routes')
require('dotenv').config()

const server = fastify({logger: true})

module.exports = {server}
const start = async () => {
  try {
    ms_router(server)
    await server.listen({port: process.env.PORT || 8000})
  } catch (err) {
    console.log(err)
    process.exit(1)
  }
}
start()
