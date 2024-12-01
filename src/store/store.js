import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Slice/counterSlice';
import userReducer from './Slice/userSlice';
// import companyReducer from './Slice/companySlice';


const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
    // companyList: companyReducer,
  },
});

export default store