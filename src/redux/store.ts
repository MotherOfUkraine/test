import {applyMiddleware, combineReducers, createStore} from "redux"

import listReducer from "./reducers/listReducer"
import historyReducer from "./reducers/historyReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    list: listReducer,
    history: historyReducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof rootReducer>