import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <NavBar></NavBar>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
);