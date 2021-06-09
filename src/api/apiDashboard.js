// Sample API request
// import { apiRoutes } from '../constants/APIRoutes';
// import { getApiHeaders } from '../api/apiHelpers';
// export async function handleSignup() {
//     try {
//       const headers = getApiHeaders();
//       const res = await fetch(API_BASE_URL + apiRoutes.SIGNUP, {
//         method: 'GET',
//         headers,
//       });
//       if (res.status <= 400) {
//         // Success
//         const json = await res.json();
//         return Promise.resolve(json);
//       } else {
//         console.log('Not found');
//         return Promise.reject(res.status);
//       }
//     } catch (err) {
//       console.log('Error Making API request', err);
//       return Promise.reject();
//     }
//   }
