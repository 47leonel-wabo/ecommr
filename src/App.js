import { Route, Switch } from "react-router-dom";
import "./App.css";
import HatArticles from "./pages/articles/hats/HatArticles";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/shop.component";

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/hats" component={HatArticles} />
            </Switch>
        </div>
    );
}

export default App;
