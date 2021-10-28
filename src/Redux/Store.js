import { createStore } from "redux";
import rootReducer from './Reduces'

const store = createStore(rootReducer)

export default store