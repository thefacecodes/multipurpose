import React from "react";
import { Link } from "react-router-dom";
import ErrorImage from "./assets/files/error.jpg";
import "./Error.css";

function ErrorPage() {
  const style = {
    padding: "1em 2em",
    fontSize: "1.3em",
    color: "white",
    background: "#2b6cb3",
    textDecoration: "none",
  };
  return (
    <div className="error">
      <img src={ErrorImage} alt="" />
      <h2>Oops!</h2>
      <p>
        We couldn't find what you're looking for, Looks like the page has been
        moved or deleted.
      </p>
      <Link style={style} to="/">
        Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
