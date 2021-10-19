import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchActivityDetail } from '../reducers/activityActions'


const ShowActivity = (props) => {

    const dispatch = props.dispatch
    useEffect(() => {
        dispatch(fetchActivityDetail())
    },[dispatch])

    
    return (
        <div>
            <h1 style={{color: "red"}}>{props.error && "ERROR"}</h1>
            <h1 style={{color: "blue"}}>{props.loading && "Loading..."}</h1>
            <h1 style={{color: "green"}}>{props.data && props.data.activity}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.data,
    loading: state.loading,
    error: state.error
})

export default connect(mapStateToProps)(ShowActivity)