import valueReducer from './valueReducer'
import dataReducer from './dataReducer'
import btnValueReducer from './btnValueReducer'
import { combineReducers, createStore } from "redux"


const reducers = combineReducers({
    valueReducer: valueReducer,
    dataReducer: dataReducer,
    btnValueReducer: btnValueReducer
})

const store = createStore(reducers)

export default store