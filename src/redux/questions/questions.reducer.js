/* eslint-disable default-param-last */
import appState from '../state';

const DELETE_QUESTION = 'DELETE_QUESTION';
const DUPLICATE_QUESTION = 'DUPLICATE_QUESTION';
const ADD_QUESTION = 'ADD_QUESTION';

const UPDATE_TITLE = 'UPDATE_TITLE';
const UPDATE_TYPE = 'UPDATE_TYPE';

const TOGGLE_REQUIRED = 'TOGGLE_REQUIRED';
const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
const TOGGLE_SPECIFIC = 'TOGGLE_SPECIFIC';
const TOGGLE_SPECIFIC_VALUE = 'TOGGLE_SPECIFIC_VALUE';

const UPDATE_1D_OPTION = 'UPDATE_1D_OPTION';
const UPDATE_2D_OPTION = 'UPDATE_1D_OPTION';

const UPDATE_LINEAR_SCALE_LABEL = 'UPDATE_LINEAR_SCALE_LABEL';
const UPDATE_LINEAR_SCALE_RANGE = 'UPDATE_LINEAR_SCALE_LABEL';

const UPDATE_FILE_RANGE = 'UPDATE_FILE_RANGE';

export const deleteQuestion = (id) => ({
  type: DELETE_QUESTION,
  payload: { id },
});

export const duplicateQuestion = (id) => ({
  type: DUPLICATE_QUESTION,
  payload: { id },
});

export const addQuestion = (id) => ({
  type: ADD_QUESTION,
  payload: { id },
});

export const updateTitle = (id, text) => ({
  type: UPDATE_TITLE,
  payload: { id, text },
});
export const updateType = (id, text) => ({
  type: UPDATE_TYPE,
  payload: { id, text },
});

export const toggleRequired = (id) => ({
  type: TOGGLE_REQUIRED,
  payload: { id },
});

export const toggleActive = (id) => ({
  type: TOGGLE_ACTIVE,
  payload: { id },
});

export const toggleSpecific = (id) => ({
  type: TOGGLE_SPECIFIC,
  payload: { id },
});

export const toggleSpecificValue = (id, value) => ({
  type: TOGGLE_SPECIFIC_VALUE,
  payload: { id, value },
});

export const update1dOption = (id, optionid, text) => ({
  type: UPDATE_1D_OPTION,
  payload: { id, optionid, text },
});

export const update2dOption = (id, dimensionName, optionid, text) => ({
  type: UPDATE_1D_OPTION,
  payload: { id, dimensionName, optionid, text },
});

export const updateLinearScaleRange = (id, rangeName, value) => ({
  type: UPDATE_LINEAR_SCALE_RANGE,
  payload: { id, rangeName, value },
});

export const updateFileRange = (id, rangeName, value) => ({
  type: UPDATE_FILE_RANGE,
  payload: { id, rangeName, value },
});

export const updateLinearScaleLabel = (id, rangeName, text) => ({
  type: UPDATE_LINEAR_SCALE_LABEL,
  payload: { id, rangeName, text },
});

export const questionsReducer = (state = appState.question, action) => {
  switch (action.type) {
    case DELETE_QUESTION: {
      const newArr = state.filter((question) => {
        return question.id !== action.payload.id;
      });
      return newArr;
    }
    case DUPLICATE_QUESTION: {
      let newObj;
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          newObj = {
            ...q,
            id: q.id + 1,
            isActive: false,
          };
        } else if (q.id > action.payload.id) {
          return { ...q, id: q.id + 1 };
        }
        return q;
      });
      newArr.push(newObj);
      newArr.sort((a, b) => a.id - b.id);
      return newArr;
    }
    case ADD_QUESTION: {
      let newObj;
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          newObj = {
            ...q,
            id: q.id + 1,
            isActive: false,
            title: 'Untitled question',
            type: 'short-answer',
          };
        } else if (q.id > action.payload.id) {
          return { ...q, id: q.id + 1 };
        }
        return q;
      });
      newArr.push(newObj);
      newArr.sort((a, b) => a.id - b.id);
      return newArr;
    }
    case UPDATE_TITLE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, title: action.payload.text };
        }
        return q;
      });
      return newArr;
    }
    case UPDATE_TYPE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, type: action.payload.text };
        }
        return q;
      });
      return newArr;
    }
    case TOGGLE_REQUIRED: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, isRequired: !q.isRequired };
        }
        return q;
      });
      return newArr;
    }
    case TOGGLE_ACTIVE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, isActive: !q.isActive };
        }
        return q;
      });
      return newArr;
    }
    case TOGGLE_SPECIFIC: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return {
            ...q,
            body: {
              ...q.body,
              fileUpload: {
                ...q.body.fileUpload,
                isSpecific: !q.body.fileUpload.isSpecific,
              },
            },
          };
        }

        return q;
      });
      return newArr;
    }
    case TOGGLE_SPECIFIC_VALUE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return {
            ...q,
            body: {
              ...q.body,
              fileUpload: {
                ...q.body.fileUpload,
                specific: q.body.fileUpload.specific.map((s) => {
                  if (s.value === action.payload.value) {
                    return { ...s, isChecked: !s.isChecked };
                  }
                  return s;
                }),
              },
            },
          };
        }
        return q;
      });
      return newArr;
    }
    case UPDATE_1D_OPTION: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          const newOptions = q.body.single.map((option, index) => {
            if (index === action.payload.optionid) {
              return action.payload.text;
            }
            return option;
          });
          return { ...q, body: { ...q.body, single: newOptions } };
        }
        return q;
      });
      return newArr;
    }
    case UPDATE_2D_OPTION: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          const newOptions = q.body.single.map((option, index) => {
            if (index === action.payload.optionid) {
              return action.payload.text;
            }
            return option;
          });
          return { ...q, body: { ...q.body, single: newOptions } };
        }
        return q;
      });
      return newArr;
    }
    case UPDATE_LINEAR_SCALE_RANGE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return {
            ...q,
            body: {
              ...q.body,
              linearScale: {
                ...q.body.linearScale,
                [action.payload.rangeName]: action.payload.value,
              },
            },
          };
        }
        return q;
      });
      return newArr;
    }
    case UPDATE_FILE_RANGE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return {
            ...q,
            body: {
              ...q.body,
              fileUpload: {
                ...q.body.fileUpload,
                [action.payload.rangeName]: action.payload.value,
              },
            },
          };
        }
        return q;
      });
      return newArr;
    }
    case UPDATE_LINEAR_SCALE_LABEL: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return {
            ...q,
            body: {
              ...q.body,
              linearScale: {
                ...q.body.linearScale,
                [action.payload.rangeName]: action.payload.text,
              },
            },
          };
        }
        return q;
      });
      return newArr;
    }
    default:
      return state;
  }
};
