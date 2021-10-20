export const FETCH_JOKE_BEGIN   = 'FETCH_JOKE_BEGIN';
export const FETCH_JOKE_SUCCESS = 'FETCH_JOKE_SUCCESS';
export const FETCH_JOKE_FAILURE = 'FETCH_JOKE_FAILURE';
export const CHANGE_JOKE_TEST = 'CHANGE_JOKE_TEST';

export const fetchJoke = () => ({
  type: FETCH_JOKE_BEGIN
});

export const fetchJokeSuccess = joke => ({
  type: FETCH_JOKE_SUCCESS,
  payload: { data : joke }
});

export const fetchJokeFailure = error => ({
  type: FETCH_JOKE_FAILURE,
  payload: { error }
});

export const changeJokeTest = joke => ({ 
  type: CHANGE_JOKE_TEST,
  payload: {data : joke}
})


export const fetchJokeDetail = () => {
    return dispatch=> {
        dispatch(fetchJoke())
        return fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart?safe-mode")
        .then(res => res.json())
        .then(json => {
            dispatch(fetchJokeSuccess(json))
            console.log(json)
            return json
        })
        .catch(err => {dispatch(fetchJokeFailure(err))});
    }
}