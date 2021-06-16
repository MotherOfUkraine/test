import {applyMiddleware, combineReducers, createStore} from "redux"
import thunk from "redux-thunk"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import listReducer from "./reducers/listReducer"
import historyReducer from "./reducers/historyReducer"

const rootReducer = combineReducers({
    list: listReducer,
    history: historyReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['history']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore<any, any, any, any>(persistedReducer,applyMiddleware(thunk) )
export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>