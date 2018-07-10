import React from "react";
import Eva from "./Evaluation";
import Test from "./Test"
import Ana from "./Analysis"
import Que from "./Question"
import { BrowserRouter as Router, Route, Link,Redirect,Switch} from "react-router-dom";
const BasicRouter = () => (
    <Router >
     <Switch>
        <Route path="/evaluation" exact component={Eva}/>
        <Route path="/evaluation/test" component={Test}/>
        <Route path="/evaluation/analysis" component={Ana}/>
        <Route path="/question" exact component={Que}/>
      </Switch>
    </Router>
);

export default BasicRouter;