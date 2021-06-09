
// API utils
// import { API_BASE_URL } from '../constants/APIConstants';
// import { apiRoutes } from '../constants/APIRoutes';

// export function getApiHeaders() {
//   return {
//     'Content-Type': 'application/json',
//     Authorization: `Token ${localStorage.getItem('token')}`,
//   };
// }

// export async function uploadToS3(file) {
//   const generateRandomString = (length=12)=>Math.random().toString(20).substr(2, length)
//   let data = new FormData();
//   data.append('file', file);
//   try {
//     const res = await fetch(
//       API_BASE_URL + apiRoutes.UPLOAD + (generateRandomString()),
//       {
//         method: 'PUT',
//         body: data,
//         headers :{
//           Authorization: `Token ${localStorage.getItem('token')}`,
//         },
//       }
//     );
//     const json = await res.json()
//     return Promise.resolve(json.file_url)
//   } catch (err) {
//     return Promise.reject(err);
//   }
// }
