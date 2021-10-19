import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchActivityDetail } from '../reducers/reducer_activity/activity_actions'


const ShowActivity = (props) => {

    const dispatch = props.dispatch
    useEffect(() => {
        dispatch(fetchActivityDetail())
    },[dispatch])

    
    return (
        <div>
            <h1 style={{color: "red"}}>{props.error && "ERROR"}</h1>
            <h1>Activity</h1>
            <h1 style={{color: "blue"}}>{props.loading && "Fetching Activity, Please Wait..."}</h1>
            <h1>{props.data && props.data.activity}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    data: state.activity.data,
    loading: state.activity.loading,
    error: state.activity.error
})

export default connect(mapStateToProps)(ShowActivity)