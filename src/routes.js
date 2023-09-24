const {add_message, get_all} = require('./service')
const {post_message, get_all_message} = require('./shemas')
module.exports = function ms_router(server) {
  server.route({
    method: 'GET',
    url: '/',
    schema: get_all_message,
    handler: async (req, rep) => {
      rep.code(200).send((await get_all()).rows)
    },
    onError: (req, reply, error) => {
      console.log(error)
      reply.status(400).send(error)
    },
  })

  server.route({
    method: 'POST',
    url: '/',
    schema: post_message,
    handler: async (req, rep) => {
      add_message(req.body.author, req.body.ms_body)
      rep.code(200)
    },
    onError: (req, reply, error) => {
      console.log(error)
      reply.status(400).send(error)
    },
  })
}
