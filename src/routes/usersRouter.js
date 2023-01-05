const { Router } = require("express");
const {
  getUsers,
  getUsersByName,
  getUserById,
  createNewUser,
  changeUser,
  deleteUser,
} = require("../controllers/usersController");

const usersRouter = Router();

usersRouter.get("/", (req, res) => {
  const { name } = req.query;
  let users;
  try {
    if (name) users = getUsersByName(name);
    else users = getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.get("/:id", (req, res) => {
  const { id } = req.params;
  try {
    const user = getUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/", (req, res) => {
  const { name, email } = req.body;
  try {
    createNewUser(name, email);
    res.status(200).json({ success: "Se agregó al nuevo personaje" });
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});

usersRouter.put("/", (req, res) => {
  const { id, name, email } = req.body;
  try {
    changeUser(id, name, email);
    res.status(200).json({ success: "El user fue modificado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.delete("/:id/delete", (req, res) => {
  const { id } = req.params;
  try {
    deleteUser(id);
    res.status(200).json({ success: "El user fue borrado correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = usersRouter;

// USUARIOS
// GET /users => me devuelva todos los users 👌
// GET /users?name= => me trae todos los que tengan ese nombre AHÍ VEMOS 👌
// GET /users/:id => me devuelve un usuario con id específico 👌
// POST /users => crear un usuario nuevo 👌
// PUT /users => modificar un usuario específico
// DELETE /users/:id/delete => eliminar un usuario específico
