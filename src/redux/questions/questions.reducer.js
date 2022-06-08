// import * as actions from '../actionTypes';
/* eslint-disable default-param-last */
import appState from '../state';

export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DUPLICATE_QUESTION = 'DUPLICATE_QUESTION';

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  payload: id,
});

const questionsReducer = (state = appState, action) => {
  switch (action.type) {
    case DELETE_QUESTION:
      // eslint-disable-next-line no-case-declarations
      const newArr = state.filter((question) => {
        return question.id !== action.payload.id;
      });
      return newArr;

    default:
      return state;
  }
};

export default questionsReducer;
