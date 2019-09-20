import axios from 'axios';

export function login(email, password) {
  return axios.post('/auth', {email, password})
  .then(auth => {
    const token = auth.data.data;
    localStorage.setItem('jwt_token', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
    return token;
  });
}

export function logout() {
  localStorage.removeItem('jwt_token');
}

export function isLogin() {
  let token = localStorage.jwt_token;
  // check token expire here
  if(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.jwt_token}`;
  }
  return !!token;
}