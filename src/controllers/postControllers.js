let { posts, users } = require("../data");

function* idGenerator() {
  let id = posts.length + 1;
  while (true) {
    yield id;
    id++;
  }
}
let newId = idGenerator();

const getPosts = () => {
  return posts;
};

const getPostById = (id) => {
  const post = posts.find((post) => post.id == id);
  if (!post) throw Error(`No existe un post con id: ${id}`);
  return post;
};

const addPost = (title, contents, userId) => {
  if (!title || !contents || !userId)
    throw Error("Los parámetros enviados no son correctos");
  const userCheck = users.find((user) => user.id == userId);
  if (!userCheck) throw Error("USER DOES NOT EXIST");
  const newPost = {
    id: newId.next().value,
    title,
    contents,
    userId,
  };
  posts.push(newPost);
};

const changePost = (id, title, contents) => {
  const post = posts.find((post) => post.id == id);
  if (!id || !title || !contents) throw Error("Faltan parámetros");
  if (!post) throw Error(`El post con el id: ${id} no existe`);
  post.title = title;
  post.contents = contents;
};

const deletePost = (id) => {
  const post = posts.find((post) => post.id == id);
  if (!post) throw Error(`El post con el id: ${id} no existe`);
  posts = posts.filter((post) => post.id != id);
};

module.exports = {
  getPosts,
  getPostById,
  addPost,
  changePost,
  deletePost,
};
