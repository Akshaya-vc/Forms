import { configureStore } from '@reduxjs/toolkit';
import { aboutReducer } from './about/about.reducer';
import { questionsReducer } from './questions/questions.reducer';

const store = configureStore({
  reducer: {
    about: aboutReducer,
    question: questionsReducer,
  },
});

export default store;
