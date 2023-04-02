import React from "react";
import { connect } from "react-redux";

const PageNotFound = () => {
  return (
    <div className="error-404">
      <div className="error-text">
        <h1>Error 404</h1>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(PageNotFound);
