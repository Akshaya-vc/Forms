/* eslint-disable default-param-last */
import appState from '../state';

import * as actions from './about.actions';

export const aboutReducer = (state = appState.about, action) => {
  switch (action.type) {
    case actions.UPDATE_NAME:
      return { ...state, name: action.payload.text };
    case actions.UPDATE_DESC:
      return { ...state, description: action.payload.text };
    default:
      return state;
  }
};
