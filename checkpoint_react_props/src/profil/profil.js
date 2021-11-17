import React from "react";
import PropTypes from "prop-types";

const Profile = (props) => {
  return (
    <div
      className="App"
      style={{ backgroundColor: "Black", margin: "0px 300px" }}
    >
      <h2> {props.children}</h2>
      <h2 style={{ backgroundColor: "pink" }}> fullName : {props.fullName} </h2>
      <h2 style={{ backgroundColor: "Pink" }}> Bio : {props.bio} </h2>
      <h2 style={{ backgroundColor: "pink" }}>
        {" "}
        Profession : {props.profession}{" "}
      </h2>
      <br />
      <button
        style={{
          backgroundColor: "Pink",
          height: "40px",
          border: "Black",
          borderRadius: "10%",
        }}
        onClick={() => props.handleName(props.fullName)}
      >
        Click here
      </button>
    </div>
  );
};

// PropsType
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
// Defaultprops
Profile.defaultProps = {
  fullName: "unknown",
  bio: "unknown",
  profession: "unknown",
};

export default Profile;
