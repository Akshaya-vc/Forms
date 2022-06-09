export const DELETE_QUESTION = 'DELETE_QUESTION';
export const DUPLICATE_QUESTION = 'DUPLICATE_QUESTION';
export const ADD_QUESTION = 'ADD_QUESTION';

export const UPDATE_TITLE = 'UPDATE_TITLE';
export const UPDATE_TYPE = 'UPDATE_TYPE';

export const TOGGLE_REQUIRED = 'TOGGLE_REQUIRED';
export const TOGGLE_ACTIVE = 'TOGGLE_ACTIVE';
export const TOGGLE_SPECIFIC = 'TOGGLE_SPECIFIC';
export const TOGGLE_SPECIFIC_VALUE = 'TOGGLE_SPECIFIC_VALUE';

export const UPDATE_1D_OPTION = 'UPDATE_1D_OPTION';
export const UPDATE_2D_OPTION = 'UPDATE_1D_OPTION';

export const UPDATE_LINEAR_SCALE_LABEL = 'UPDATE_LINEAR_SCALE_LABEL';
export const UPDATE_LINEAR_SCALE_RANGE = 'UPDATE_LINEAR_SCALE_LABEL';

export const UPDATE_FILE_RANGE = 'UPDATE_FILE_RANGE';

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
