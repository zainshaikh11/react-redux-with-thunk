import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  fetchJokeDetail,
  changeJokeTest,
} from "../reducers/reducer_joke/joke_actions";
import {
  jokeSelector,
  loadingSelector,
  errorSelector,
} from "../reducers/reducer_joke/selectors";
import loading from '../loading.gif'

const ShowJoke = (props) => {
  const dispatch = props.dispatch;
  useEffect(() => {
    dispatch(fetchJokeDetail());
  }, [dispatch]);

  const buttonClick = () => {
    dispatch(changeJokeTest({ setup: "test", delivery: "test" }));
  };

  return (
    <div>
      <h1 style={{ color: "red" }}>{props.error && "ERROR"}</h1>
      <h1>Joke</h1>
      <div className="block__loading">
          {props.loading && (
            <>
              <img src={loading} alt="loading..." />
              <p>Fetching A Joke, Please Wait...</p>
            </>
          )}
      </div>
      <h1>{props.data && props.data.setup}</h1>
      <h2>{props.data && props.data.delivery}</h2>
      <div>
        <button className="elem__button--right" onClick={buttonClick}>
          Test
        </button>
        <button
          className="elem__button--right"
          onClick={() => dispatch(fetchJokeDetail())}
        >
          NewJoke
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: jokeSelector(state),
  loading: loadingSelector(state),
  error: errorSelector(state),
});

export default connect(mapStateToProps)(ShowJoke);
