import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchJokeDetail } from '../reducers/reducer_joke/joke_actions'


const ShowJoke = (props) => {

    const dispatch = props.dispatch
    useEffect(() => {
        dispatch(fetchJokeDetail())
    },[dispatch])

    
    return (
        <div>
            <h1 style={{color: "red"}}>{props.error && "ERROR"}</h1>
            <h1>Joke</h1>
            <h1 style={{color: "blue"}}>
                {props.loading && "Fetching A Joke, Please Wait..."}
                </h1>
            <h1>
                {props.data && props.data.setup}
                </h1>
            <h2>
                {props.data && props.data.delivery}</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.joke.joke,
    loading: state.joke.loading,
    error: state.joke.error
})

export default connect(mapStateToProps)(ShowJoke)