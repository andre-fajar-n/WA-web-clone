import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducer/user";
import chatReducer from "./reducer/chat";
import statusReducer from "./reducer/status";

const rootReducer = combineReducers({
    user: userReducer,
    chat: chatReducer,
    status: statusReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

store.subscribe(() => console.warn("cek store", store.getState()))

export default store