import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import interactionReducer from './interactionSlice';
import App from './App';

// Setup Redux Store
const store = configureStore({
  reducer: {
    interaction: interactionReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);