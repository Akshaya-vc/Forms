export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_DESC = 'UPDATE_DESC';

// actions
export const updateName = (text) => ({
  type: UPDATE_NAME,
  payload: { text },
});

export const updateDesc = (text) => ({
  type: UPDATE_DESC,
  payload: { text },
});
