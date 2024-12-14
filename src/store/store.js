import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './UserSlice'
import analyticReducer from './Analytic.ts'
const store=configureStore({//config store retutns a object
reducer:{
search:searchReducer,
analytic:analyticReducer,
}
})
export default store;