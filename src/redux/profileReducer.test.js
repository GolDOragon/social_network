import profileReducer, { profileAC } from './profileReducer';

it('new post should be added', () => {
  let action = profileAC.setPost('New post');
  let initialState = {
    profile: null,
    isFetching: false,
    status: null,
    posts: [
      {
        id: 0,
        message: 'Hi',
        likeCount: 22,
      },
      {
        id: 0,
        message: 'How are you?',
        likeCount: 10,
      },
      {
        id: 0,
        message: "I'm fine, thanks",
        likeCount: 13,
      },
    ],
  };

  let newState = profileReducer(initialState, action);
  expect(newState.posts.length).toBe(initialState.posts.length + 1);
  expect(newState.posts[0].message).toBe('New post');
});
