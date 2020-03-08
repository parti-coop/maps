import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
function initMap() {
  const mapOptions = {
    center: new window.naver.maps.LatLng(37.3595704, 127.105399),
    zoom: 10
  };

  const map = new window.naver.maps.Map("map", mapOptions);
  console.log(map);
}
ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
initMap();
