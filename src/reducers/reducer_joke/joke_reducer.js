import {
    FETCH_JOKE_BEGIN,
    FETCH_JOKE_SUCCESS,
    FETCH_JOKE_FAILURE,
    CHANGE_JOKE_TEST
} from './joke_actions'


const initialState = {
    joke: {},
    loading: false,
    error: null
}

export const jokeReducer = (state=initialState, action) => {
    switch(action.type) {
        case FETCH_JOKE_BEGIN:
            return {
                ...state,
                loading: true,
                error: null,
                joke: {}
            }
        case FETCH_JOKE_SUCCESS:
            return {
                ...state,
                loading: false,
                joke: action.payload.data
            }
        case FETCH_JOKE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                joke: {}
            }
        case CHANGE_JOKE_TEST:
            return {
                ...state,
                loading: false,
                joke: action.payload.data
            }
        default:
            return state
    }
}