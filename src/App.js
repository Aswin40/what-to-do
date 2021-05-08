import React, { useEffect, useState } from "react";
import boredAPI from "./api/boredAPI";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import Home from "./components/Home";

function App() {
  const [activityDetails, setActivityDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    boredAPI
      .getActivities()
      .then((activityDetails) => setActivityDetails(activityDetails))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className={`app ${activityDetails?.type}`}>
      <Home activityDetails={activityDetails} loading={loading} />
    </div>
  );
}

export default App;
