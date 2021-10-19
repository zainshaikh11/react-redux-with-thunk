export const FETCH_ACTIVITY_BEGIN   = 'FETCH_ACTIVITY_BEGIN';
export const FETCH_ACTIVITY_SUCCESS = 'FETCH_ACTIVITY_SUCCESS';
export const FETCH_ACTIVITY_FAILURE = 'FETCH_ACTIVITY_FAILURE';

export const fetchActivity = () => ({
  type: FETCH_ACTIVITY_BEGIN
});

export const fetchActivitySuccess = data => ({
  type: FETCH_ACTIVITY_SUCCESS,
  payload: { data }
});

export const fetchActivityFailure = error => ({
  type: FETCH_ACTIVITY_FAILURE,
  payload: { error }
});


export const fetchActivityDetail = () => {
    return dispatch=> {
        dispatch(fetchActivity())
        return fetch("https://www.boredapi.com/api/activity")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchActivitySuccess(json))
            console.log(json.login)
            return json.data
        })
        .catch(err => {dispatch(fetchActivityFailure(err))});
    }
}