import { userConstants } from '../_constants/user.constants';

const initialState = {
    isLoading: false,
    user: {}
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case userConstants.ADD_USER: 
            return {
                ...state,
                user: action.user
            };
        case userConstants.GET_USER:
            return {
                ...state
            };
        case userConstants.UPDATE_USER:
            return {
                ...state,
                user: action.user
            };
        case userConstants.DELETE_USER:
            return state.filter( (user) => user.email !== action.user.email )
        default:
            return state;
    }
};

export default reducer;