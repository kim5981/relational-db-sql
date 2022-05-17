const db = require("../../data/db-config")

const getAll = () => {
  //* select * from accounts;
  return db('accounts')
}

const getById = id => {
  //* select * from accounts where id = 1;
  return db('accounts').where('id', id).first() 
  // .where('id', id) resolves to collection 
  // adding .first() only returns first of that param
}

const create = async account => {
  //* INSERT INTO accounts (name, budget) values ('foo', 1000);
  const [id] = await db('accounts').insert(account) // returns an id
  return getById(id)
}

const updateById = async (id, account) => {
  //* UPDATE accounts SET name='foo', budget=1000 WHERE id=1;
  await db("accounts").where("id", id).update(account)
  return getById(id)
}

const deleteById = id => {
  //* DELETE FROM accounts WHERE id = 1;
  return db("accounts").where("id", id).del() // returns # of deleted records
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
