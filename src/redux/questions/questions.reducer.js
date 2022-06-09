/* eslint-disable default-param-last */
import appState from '../state';
import * as actions from './questions.actions';

export const questionsReducer = (state = appState.question, action) => {
  switch (action.type) {
    case actions.DELETE_QUESTION: {
      const newArr = state.filter((question) => {
        return question.id !== action.payload.id;
      });
      return newArr;
    }
    case actions.DUPLICATE_QUESTION: {
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
    case actions.ADD_QUESTION: {
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
    case actions.UPDATE_TITLE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, title: action.payload.text };
        }
        return q;
      });
      return newArr;
    }
    case actions.UPDATE_TYPE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, type: action.payload.text };
        }
        return q;
      });
      return newArr;
    }
    case actions.TOGGLE_REQUIRED: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, isRequired: !q.isRequired };
        }
        return q;
      });
      return newArr;
    }
    case actions.TOGGLE_ACTIVE: {
      const newArr = state.map((q) => {
        if (q.id === action.payload.id) {
          return { ...q, isActive: !q.isActive };
        }
        return q;
      });
      return newArr;
    }
    case actions.TOGGLE_SPECIFIC: {
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
    case actions.TOGGLE_SPECIFIC_VALUE: {
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
    case actions.UPDATE_1D_OPTION: {
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
    case actions.UPDATE_2D_OPTION: {
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
    case actions.UPDATE_LINEAR_SCALE_RANGE: {
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
    case actions.UPDATE_FILE_RANGE: {
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
    case actions.UPDATE_LINEAR_SCALE_LABEL: {
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
