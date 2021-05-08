import React from "react";

const Home = ({ activityDetails }) => {
  return (
    <React.Fragment>
      <div>
        <Intro />
      </div>
      <div className="activity-container">
        <Activty activityDetails={activityDetails} />
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

const Activty = ({ activityDetails }) => {
  return (
    <div>
      <p className={`activity-text`}> {activityDetails?.activity}</p>
    </div>
  );
};

export default Home;
