import React from 'react';
import './index.css';
import {withProviders} from "./providers";
import {Routing} from "../pages";

function App() {
    return (
    <div className="App">
        Smth...
        <Routing/>
    </div>
  );
}

export default withProviders(App);
