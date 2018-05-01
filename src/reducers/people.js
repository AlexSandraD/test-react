import assign from 'lodash/assign';
import map from 'lodash/map';
import * as types from './../actions/action';
import data from './../data/person.json';

const initialState = {
  people: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case types.FETCH_PEOPLE_REQUEST:
      return {
        ...state,
        people: state.people,
      };
    case types.FETCH_PEOPLE_SUCCESS:
      return {
        ...state,
        people: data.person,
      };

    case types.FETCH_PEOPLE_FAILURE:
      return {
        ...state,
      };
    case types.CHANGE_FRIENDS_REQUEST:
      return {
        ...state,
        people: map(state.people, (person) => {
          return person.id === action.id ?
            assign({}, person, { friend: !person.friend }) :
            person;
        }),
      };
    case types.CHANGE_FRIENDS_SUCCESS:
      return {
        id: action.id,
        error: false,
      };
    case types.CHANGE_FRIENDS_FAILURE:
      return {
        error: true,
      };
    case types.CHANGE_FAVOURITE_REQUEST:
      return {
        ...state,
        people: map(state.people, (person) => {
          return person.id === action.id ?
            assign({}, person, { favourite: !person.favourite }) :
            person;
        }),
      };
    case types.CHANGE_FAVOURITE_SUCCESS:
      return {
        id: action.id,
        error: false,
      };
    case types.CHANGE_FAVOURITE_FAILURE:
      return {
        error: true,
      };
    default:
      return state;
  }
}