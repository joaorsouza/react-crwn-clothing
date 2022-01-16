import React from "react";
import "./Homepage.scss";
import Directory from "../../components/directory/directory.component";

function Homepage(props) {
  console.log("props: ", props);
  return (
    <div className="homepage">
      <Directory />
    </div>
  );
}

export default Homepage;
