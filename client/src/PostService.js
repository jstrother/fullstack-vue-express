import Vue from 'vue';
import axios from 'axios';

Vue.use(axios);

const url = 'http://localhost:5000/api/posts/';

export default class PostService {
  // get posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map(post => ({
            ...post,
            createdAt: new Date(post.createdAt)
          }))
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  // add post
  static addPost(text) {
    return axios.post(url, {
      text
    });
  }

  // delete post
  static deletePost(id) {
    return axios.delete(`${url}${id}`);
  }

}
