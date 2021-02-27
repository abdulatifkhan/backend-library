const users = [
  { user_id: 1, username: 'Doniyor', password: '123', is_admin: false },
  { user_id: 2, username: 'Alisher', password: '123', is_admin: false },
  { user_id: 3, username: 'Farhod', password: '123', is_admin: false },
  { user_id: 4, username: 'Nodir', password: '123', is_admin: false },
  { user_id: 5, username: 'root', password: '123', is_admin: true },
]

const permissions = [
  { permission_id: 1, user_id: 1, permission_code: 1, module: 'user' },
  { permission_id: 2, user_id: 1, permission_code: 2, module: 'user' },

  { permission_id: 3, user_id: 3, permission_code: 4, module: 'user' },
  { permission_id: 4, user_id: 2, permission_code: 3, module: 'user' },
]

const books = [
  {book_id: 1, book_name: "Lola"},
  {book_id: 2, book_name: "Atirgul"},
]

module.exports = { users, permissions, books }

/*

  1 - read
  2 - read and write
  3 - read and change
  4 - read and delate

*/