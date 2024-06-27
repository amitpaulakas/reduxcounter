import { configureStore   } from '@reduxjs/toolkit'
import Counteraslice from '../All slice/Counteraslice';

const store = configureStore({
    reducer: {
     count:Counteraslice,
    },
  })
  export {store};