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
        multiple: { row: ['r1', 'r2'], column: ['c1', 'c2'] },
        linearScale: {
          label1: 'Label (optional)',
          label2: 'Label (optional)',
          range1: 1,
          range2: 5,
        },
        fileUpload: {
          size: '10 MB',
          total: '1',
          isSpecific: false,
          specific: [
            { value: 'Document', isChecked: true },
            { value: 'Spreadsheet', isChecked: false },
            { value: 'PDF', isChecked: false },
            { value: 'Video', isChecked: false },
            { value: 'Presentation', isChecked: false },
            { value: 'Drawing', isChecked: false },
            { value: 'Image', isChecked: false },
            { value: 'Audio', isChecked: false },
          ],
        },
      },
      id: 1,
      isActive: true,
      isRequired: false,
    },
    {
      title: 'question 2',
      type: 'time',
      body: {
        single: ['option 1', 'option 2'],
        multiple: { row: ['row1'], column: ['colu 1', 'colu 2'] },
        linearScale: {
          label1: 'Label (optional)',
          label2: 'Label (optional)',
          range1: 1,
          range2: 5,
        },
        fileUpload: {
          size: '10 MB',
          total: '1',
          isSpecific: false,
          specific: [
            { value: 'Document', isChecked: false },
            { value: 'Spreadsheet', isChecked: false },
            { value: 'PDF', isChecked: false },
            { value: 'Video', isChecked: false },
            { value: 'Presentation', isChecked: false },
            { value: 'Drawing', isChecked: false },
            { value: 'Image', isChecked: false },
            { value: 'Audio', isChecked: false },
          ],
        },
      },
      id: 2,
      isActive: false,
      isRequired: true,
    },
  ],
};

export default appState;
