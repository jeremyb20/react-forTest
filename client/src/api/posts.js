import axios from "axios";

export const getPostsRequest = () => axios.get("/api/posts");

export const getPostRequest = (id) => axios.get("/api/posts/" + id);

export const deletePostRequest = (id) => axios.delete("/api/posts/" + id);

export const createPostRequest = (post) => {
  const form = new FormData();
  for (let key in post) {
    form.append(key, post[key]);
  }
  return axios.post("/api/posts", form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const updatePostRequest = async (id, newPostFields) => {
  return axios.put("/api/posts/" + id, newPostFields);
};
