import axios from 'axios';

const API = `https://65f5d67941d90c1c5e0a3e58.mockapi.io/list`;

const todos = {
  get: () => axios.get(API).then(({ data }) => data),

  delete: (id) => axios.delete(`${API}/${id}`).then(({ data }) => data),

  patch: (id, item) => axios.patch(`${API}/${id}`, item).then(({ data }) => data),

  put: (id, item) => axios.put(`${API}/${id}`, item).then(({ data }) => data),

  post: (item) => axios.post(API, item).then(({ data }) => data),
};



// const todos = {
//   get: () => fetch(API).then((data) => data.json()),

//   delete: (id) =>
//     fetch(`${API}/${id}`, { method: "DELETE" }).then((data) => data.json()),

//   patch: (id, item) =>
//     fetch(`${API}/${id}`, {
//       method: "PATCH",
//       body: JSON.stringify(item),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((data) => data.json()),

//   put: (id, item) =>
//     fetch(`${API}/${id}`, {
//       method: "PUT",
//       body: JSON.stringify(item),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((data) => data.json()),

//   post: (item) =>
//     fetch(API, {
//       method: "POST",
//       body: JSON.stringify(item),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }).then((data) => data.json()),
// };

export default todos;
