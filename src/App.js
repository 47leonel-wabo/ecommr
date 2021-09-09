import { Route, Switch } from "react-router-dom";
import "./App.css";
import HatArticles from "./pages/articles/hats/HatArticles";
import HomePage from "./pages/home/HomePage";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/hats" component={HatArticles} />
            </Switch>
        </div>
    );
}

export default App;
