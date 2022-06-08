const appState = {
  about: {
    name: 'Untitled form',
    description: 'Enter description',
  },
  question: [
    {
      title: 'question 1',
      type: 'short-answer',
      body: {
        single: ['option 1', 'option 2'],
        multiple: { row: [], column: [] },
      },
      id: 1,
      isActive: true,
      isRequired: false,
    },
    {
      title: 'question 2',
      type: 'checkbox',
      body: {
        single: ['option 1', 'option 2'],
        multiple: { row: ['row1'], column: ['colu 1', 'colu 2'] },
      },
      id: 2,
      isActive: false,
      isRequired: true,
    },
  ],
};

export default appState;
