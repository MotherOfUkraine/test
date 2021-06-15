import {historyAction, historyState, historyType} from "../../types/historyTypes";


const initialState: historyState = {
    history: []
}

const historyReducer = (state = initialState, action: historyAction): historyState => {
    switch (action.type){
        case historyType.SET_HISTORY: return {...state, history: [...state.history, action.payload]}
        default: return state
    }
}

export default historyReducer