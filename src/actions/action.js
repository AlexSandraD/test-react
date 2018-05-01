export const FETCH_PEOPLE_REQUEST = 'FETCH_PEOPLE_REQUEST';
export const requestPeople = () => ({ type: FETCH_PEOPLE_REQUEST });
export const FETCH_PEOPLE_SUCCESS = 'FETCH_PEOPLE_SUCCESS';
export const successPeople = id => ({ type: FETCH_PEOPLE_SUCCESS, id });
export const FETCH_PEOPLE_FAILURE = 'FETCH_PEOPLE_FAILURE';
export const failurePeople = error => ({ type: FETCH_PEOPLE_FAILURE, error });

export const CHANGE_FRIENDS_REQUEST = 'CHANGE_FRIENDS_REQUEST';
export const requestChangeFriend = id => ({ type: CHANGE_FRIENDS_REQUEST, id });
export const CHANGE_FRIENDS_SUCCESS = 'CHANGE_FRIENDS_SUCCESS';
export const successChangeFriend = id => ({ type: CHANGE_FRIENDS_SUCCESS, id });
export const CHANGE_FRIENDS_FAILURE = 'CHANGE_FRIENDS_FAILURE';
export const failureChangeFriend = error => ({ type: CHANGE_FRIENDS_FAILURE, error });

// export const DELETE_FRIENDS_REQUEST = 'DELETE_FRIENDS_REQUEST';
// export const requestDeleteFriend = id => ({ type: DELETE_FRIENDS_REQUEST, id });
// export const DELETE_FRIENDS_SUCCESS = 'DELETE_FRIENDS_SUCCESS';
// export const successDeleteFriend = id => ({ type: DELETE_FRIENDS_SUCCESS, id });
// export const DELETE_FRIENDS_FAILURE = 'DELETE_FRIENDS_FAILURE';
// export const failureDeleteFriend = error => ({ type: DELETE_FRIENDS_FAILURE, error });

export const CHANGE_FAVOURITE_REQUEST = 'CHANGE_FAVOURITE_REQUEST';

// export function requestChangeFavourite(id) {
//   const action = {
//     type: CHANGE_FAVOURITE_REQUEST,
//     id,
//   };
//   return action;
// }

export const requestChangeFavourite = id => ({ type: CHANGE_FAVOURITE_REQUEST, id });
export const CHANGE_FAVOURITE_SUCCESS = 'CHANGE_FAVOURITE_SUCCESS';
export const successChangeFavourite = id => ({ type: CHANGE_FAVOURITE_SUCCESS, id });
export const CHANGE_FAVOURITE_FAILURE = 'CHANGE_FAVOURITE_FAILURE';
export const failureChangeFavourite = error => ({ type: CHANGE_FAVOURITE_FAILURE, error });

// export const DELETE_FAVOURITE_REQUEST = 'DELETE_FAVOURITE_REQUEST';
// export const requestDeleteFavourite = id => ({ type: DELETE_FAVOURITE_REQUEST, id });
// export const DELETE_FAVOURITE_SUCCESS = 'DELETE_FAVOURITE_SUCCESS';
// export const successDeleteFavourite = id => ({ type: DELETE_FAVOURITE_SUCCESS, id });
// export const DELETE_FAVOURITE_FAILURE = 'DELETE_FAVOURITE_FAILURE';
// export const failureDeleteFavourite = error => ({ type: DELETE_FAVOURITE_FAILURE, error });
