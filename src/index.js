import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";


// render(<p>Hello App!!!</p>, document.querySelector("#root"));
render(<Router />, document.querySelector("#root"))
