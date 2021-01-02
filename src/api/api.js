import Axios from 'axios';

const baseRequest = Axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': '86798368-ca86-4eaa-8c39-db3db0a87b46',
  },
});

export const usersAPI = {
  getUsers: (currentPage = 1, pageSize = 5) => {
    return baseRequest
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((res) => res.data);
  },
  subscribe: (id) => {
    return baseRequest.post('follow/' + id).then((res) => res.data);
  },
  unsubscribe: (id) => {
    return baseRequest.delete('follow/' + id).then((res) => res.data);
  },
  getProfile: (id) => {
    return baseRequest.get('profile/' + id).then((res) => {
      return res.data;
    });
  },
};

export const authentication = () => {
  return baseRequest.get('auth/me').then((res) => res.data);
};
