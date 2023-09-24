const message_structure = {
  type: 'object',
  properties: {
    id: {type: 'integer'},
    author: {type: 'string'},
    createdAt: {type: 'string', format: 'date-time'},
    body: {type: 'string'},
  },
  required: ['id', 'body', 'author', 'created_at'],
}

const get_all_message = {
  response: {
    200: {
      type: 'array',
      items: message_structure,
    },
  },
}

const post_message = {
  body: {
    type: 'object',
    properties: {
      author: {type: 'string'},
      ms_body: {type: 'string'},
    },
    required: ['ms_body', 'author'],
  },
}
module.exports = {post_message, get_all_message}
