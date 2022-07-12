import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavigationWrapper} from './NavigationWrapper'
import * as React from "react";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    This is pocket board for developers.
                </p>
            </header>
        <NavigationWrapper/>
        </div>
    );
}

export default App;
