import {configureStore} from '@reduxjs/toolkit';
import eventsReducer from "./slices/events";

export default configureStore({
    
reducer:{
    event: eventsReducer,
}


})