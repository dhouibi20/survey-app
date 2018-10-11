import constants from '../constants';

export default (state = {user: null}, action) =>{ console.log(action)
    switch(action.type) {
        case constants.FETCH_USER:
        return { ...state, ...{user: action.user} }
        default:
        return state;
    }
}