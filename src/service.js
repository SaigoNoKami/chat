const db_pool = require('./db')
async function add_message(author, body) {
  await db_pool.query(
    `INSERT INTO chat (author, body)
 VALUES ($1, $2);`,
    [author, body]
  )
}

async function get_all() {
  return await db_pool.query(`SELECT * FROM chat;`)
}
module.exports = {add_message, get_all}
