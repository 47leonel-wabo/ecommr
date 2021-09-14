import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavHeader from "./components/header/header.component";
import HatArticles from "./pages/articles/hats/HatArticles";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin/singin.signup.component";

function App() {
    return (
        <div>
            <NavHeader />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="/hats" component={HatArticles} />
                <Route path="/signin-signup" component={SignInSignUp} />
            </Switch>
        </div>
    );
}

export default App;
