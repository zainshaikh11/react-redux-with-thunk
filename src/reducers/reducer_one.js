import {
    FETCH_ACTIVITY_BEGIN,
    FETCH_ACTIVITY_SUCCESS,
    FETCH_ACTIVITY_FAILURE
} from './activityActions'


const initialState = {
    data: {},
    loading: false,
    error: null
}

export const reducerOne = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_ACTIVITY_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_ACTIVITY_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload.data
            }
        case FETCH_ACTIVITY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                data: {}
            }
        default:
            return state
    }
}