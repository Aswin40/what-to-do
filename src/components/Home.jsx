import React from "react";
import Loader from "./Loader";

const Home = ({ activityDetails, loading }) => {
  return (
    <React.Fragment>
      <div>
        <Intro />
      </div>
      <div className="activity-container">
        <Activty activityDetails={activityDetails} loading={loading} />
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

const Activty = ({ activityDetails, loading }) => {
  return (
    <div>
      <Loader visible={loading} />
      <p className={`activity-text`}> {activityDetails?.activity}</p>
    </div>
  );
};

export default Home;
