import {USER_INFO} from './actionsTypes'
import {combineReducers} from 'redux'
function add(state='111',action) {
    switch (action.type){
        case "USER_INFO":
            return action.value
            break;
        default:
            return state;
    }
}
export default combineReducers({add})