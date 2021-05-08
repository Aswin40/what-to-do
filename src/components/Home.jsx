import React from "react";
import Loader from "./Loader";

const Home = ({ activityDetails, loading, getActivities }) => {
  return (
    <React.Fragment>
      <div>
        <Intro />
      </div>
      <div className="activity-container">
        <Activty
          activityDetails={activityDetails}
          loading={loading}
          getActivities={getActivities}
        />
      </div>
    </React.Fragment>
  );
};
const Intro = () => {
  return (
    <React.Fragment>
      <h1 className="heading">
        Life is so boring! &#128580; What to do? &#129300;
      </h1>
    </React.Fragment>
  );
};

const Activty = ({ activityDetails, loading, getActivities }) => {
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <React.Fragment>
          <p className={`activity-text`}> {activityDetails?.activity}</p>
          <div className="try-something-else-button-container">
            <button
              style={{ textAlign: "center" }}
              className="try-something-else-button"
              onClick={getActivities}
            >
              Try Something Else
            </button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Home;
