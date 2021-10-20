import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  dataSelector,
  loadingSelector,
  errorSelector,
} from "../reducers/reducer_activity/selectors";
import { fetchActivityDetail } from "../reducers/reducer_activity/activity_actions";
import loading from "../loading.gif";

const ShowActivity = (props) => {
  const dispatch = props.dispatch;
  useEffect(() => {
    dispatch(fetchActivityDetail());
  }, [dispatch]);

  return (
    <div>
      <h1 style={{ color: "red" }}>{props.error && "ERROR"}</h1>
      <h1>Activity</h1>
      <div className="block__loading">
        {props.loading && (
          <>
            <img src={loading} alt="loading..." />
            <p>Fetching Activity, Please Wait...</p>
          </>
        )}
      </div>
      <h1>{props.data && props.data.activity}</h1>
      <button className="elem__button--left" onClick={()=>{dispatch(fetchActivityDetail())}}>New Activity</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: dataSelector(state),
  loading: loadingSelector(state),
  error: errorSelector(state),
});

export default connect(mapStateToProps)(ShowActivity);
