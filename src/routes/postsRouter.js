const { Router } = require("express");

const postsRouter = Router();

postsRouter.get("/", () => {
    // que me traiga todos los posts
  });
  
  postsRouter.get("/:id", () => {
    // que me traiga un post con ID determinado
  });
  
  postsRouter.post("/", () => {
    // RECORDAR CHECKEAR QUE ME MANDEN TITLE, CONTENTS Y USERID...SINO ERROR
    // me cree un post nuevo.
    // voy a recibir por body title, contents, userId
    // el userId indica el usuario que creó esto
    // un usuario que no existe, no puede crear nada
    // si el usuario de id userId no existe... Error("user does not exist")
  });
  
  postsRouter.put("/", () => {
    // recibe por body id, title, contents
  });
  
  postsRouter.delete("/:id/delete", () => {
    // elimina el post de id indicado
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