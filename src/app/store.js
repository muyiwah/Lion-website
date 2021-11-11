import {configureStore} from '@reduxjs/toolkit';
// import { createStore } from 'redux';
// import {persistStore} from 'redux-persist';
// import rootReducer from './root-reducer';
import userReducer from '../features/userSlice';



// const store = createStore(rootReducer);

// const persistor = persistStore(store);

export default configureStore({
  reducer: {
    user: userReducer,
  }
})
