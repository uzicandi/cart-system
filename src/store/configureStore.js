import { configureStore } from '@reduxjs/toolkit';

const reducer = (state, action) => {
  console.log(state, action);
};

const store = configureStore({ reducer });

export default store;
