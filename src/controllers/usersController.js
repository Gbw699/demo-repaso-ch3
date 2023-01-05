let { users } = require("../data");

function* idGenerator() {
  let id = users.length + 1;
  while (true) {
    yield id;
    id++;
  }
}
let newId = idGenerator();



const getUsers = () => {
  return users;
};

const getUsersByName = (name) => {
  const result = users.filter((user) => user.name === name);
  if (!result.length) throw Error("Users not found");
  return result;
};

const getUserById = (id) => {
  const result = users.find((user) => user.id == id);
  if (!result) throw Error(`User with id: ${id} does not exist`);
  return result;
};

const createNewUser = (name, email) => {
  if (!name || !email) throw Error("Los parámetros no son correctos");
  const newUser = {
    id: newId.next().value,
    name,
    email,
  };
  users.push(newUser);
};

const changeUser = (id, name, email) => {
  const user = users.find((user) => user.id == id);
  if (!user) throw Error(`El user con id: ${id} no existe`);
  if (!name || !email) throw Error("Los parámetros no son correctos");
  user.name = name;
  user.email = email;
};

const deleteUser = (id) => {
  const userToDelete = users.find((user) => user.id == id);
  if (!userToDelete) throw Error(`No existe el personaje con id: ${id}`);
  users = users.filter((user) => user.id != id);
};

module.exports = {
  getUsers,
  getUsersByName,
  getUserById,
  createNewUser,
  changeUser,
  deleteUser,
};
