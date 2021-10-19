import { combineReducers } from 'redux'
import { reducerOne } from './reducer_activity/activity_reducer'
import { jokeReducer } from './reducer_joke/joke_reducer'


export const rootReducer = combineReducers({
    activity: reducerOne,
    joke: jokeReducer
})