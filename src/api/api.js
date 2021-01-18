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
  // how we can replace methods
  getProfile: (id) => {
    console.warn('Obsolete method. Please use profileAPI.getProfile');
    return profileAPI.getProfile(id);
  },
};

export const profileAPI = {
  getProfile: (id) => {
    return baseRequest.get('profile/' + id).then((res) => {
      return res.data;
    });
  },
  getStatus: (id) => {
    return baseRequest.get('profile/status/' + id).then((res) => {
      return res.data;
    });
  },
  updateStatus: (status) => {
    return baseRequest
      .put('profile/status/', {
        status,
      })
      .then((res) => {
        return res.data;
      });
  },
  setPost: (post) => {
    return new Promise((resolve) => resolve({ resultCode: 0 }));
  },
};

export const authentication = () => {
  console.warn('Obsolete method. Please use authAPI.authentication');
  return authAPI.authentication();
};

export const authAPI = {
  authentication: () => baseRequest.get('auth/me').then((res) => res.data),
  login: (userData) => {
    return baseRequest
      .post('auth/login', {
        ...userData,
      })
      .then((res) => {
        return res.data;
      });
  },
  logout: () => {
    return baseRequest.delete('auth/login').then((res) => res.data);
  },
};
