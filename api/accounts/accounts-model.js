const db = require("../../data/db-config")

const getAll = () => {
  //* select * from accounts
  return db('accounts')
}

const getById = id => {
  //* select * from accounts where id = 1
  return db('accounts').where('id', id).first() 
  // .where('id', id) resolves to collection 
  // adding .first() only returns first of that param
}

const create = account => {
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
