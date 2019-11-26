import React from "react";
import loader from "../../../Alternate-Preloader.gif";
import "./Loader.css";

export default function Loader() {
  return <img className="Loader" src={loader} alt="Loader" />;
}
