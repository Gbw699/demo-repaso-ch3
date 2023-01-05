let users = [
  {
    id: 1,
    name: "Gabriel Romero",
    email: "gromero@mail.com",
  },
  {
    id: 2,
    name: "Joquin Gimenez",
    email: "jgimenez@mail.com",
  },
  {
    id: 3,
    name: "Brenda Belen",
    email: "bbelen@mail.com",
  },
];

let posts = [
  {
    id: 1,
    title: "Clase de Express",
    contents: "Un contenido de la clase",
    userId: 2,
  },
  {
    id: 2,
    title: "Clase de Express",
    contents: "Un contenido de la clase",
    userId: 1,
  },
  {
    id: 3,
    title: "Clase de Express",
    contents: "Un contenido de la clase",
    userId: 3,
  },
];

module.exports = {
  users,
  posts,
};
