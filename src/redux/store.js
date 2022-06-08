import { configureStore } from '@reduxjs/toolkit';
import { aboutReducer } from './about/about.reducers';
// import { applyMiddleware } from 'redux';
// import logger from 'redux-logger';

// import rootReducer from './root-reducer';

// const middlewares = [logger];

const store = configureStore({
  reducer: {
    about: aboutReducer,
    // question: questionReducer,
    // body: bodyReducer,
  },
});

export default store;
