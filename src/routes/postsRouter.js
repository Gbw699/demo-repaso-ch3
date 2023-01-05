const { Router } = require("express");
const { getPosts, getPostById, addPost } = require("../controllers/postControllers");

const postsRouter = Router();

postsRouter.get("/", (req, res) => {
  // que me traiga todos los posts
  const posts = getPosts();
  res.status(200).json(posts);
});

postsRouter.get("/:id", (req, res) => {
  // que me traiga un post con ID determinado
  const { id } = req.params;
  try {
    const post = getPostById(id);
    res.status(200).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

postsRouter.post("/", (req, res) => {
  // RECORDAR CHECKEAR QUE ME MANDEN TITLE, CONTENTS Y USERID...SINO ERROR
  // me cree un post nuevo.
  // voy a recibir por body title, contents, userId
  // el userId indica el usuario que creó esto
  // un usuario que no existe, no puede crear nada
  // si el usuario de id userId no existe... Error("user does not exist")
  const { title, contents, userId } = req.body;
  try {
    addPost(title, contents, userId)
    res.status(200).json({ success: "El post se agregó correctamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

postsRouter.put("/", (req, res) => {
  // recibe por body id, title, contents
  res.status(200).json({ success: "ok" });
});

postsRouter.delete("/:id/delete", (req, res) => {
  // elimina el post de id indicado
  res.status(200).json({ success: "ok" });
});

// {
//     title:"Clase de Express II",
//     contents:"Este es el contenido",
//     userId:2
// }
//
// {
//     title:"Clase de Express II",
//     contents:"Este es el contenido",
//     userId:10
// }

module.exports = postsRouter;
