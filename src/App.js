import React from "react";
import Tracker from "./pages/tracker";
import {Route} from "react-router-dom";
import Maps from "./pages/maps";

class App extends React.Component {

    render() {

        return (
            <div>
                <Route path="/" exact component={Tracker} />
                <Route path="/maps" exact component={Maps} />
            </div>
        )
    }
}
export default App;
