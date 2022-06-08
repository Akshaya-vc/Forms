/* eslint-disable default-param-last */
import appState from '../state';

export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_DESC = 'UPDATE_DESC';

// actions
export const updateName = (text) => ({
  type: UPDATE_NAME,
  payload: text,
});

export const updateDesc = (text) => ({
  type: UPDATE_DESC,
  payload: text,
});

// reducer

export const aboutReducer = (state = appState.about, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, name: action.payload.text };
    default:
      return state;
  }
};
