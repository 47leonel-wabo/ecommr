import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavHeader from "./components/header/header.component";
import HatArticles from "./pages/articles/hats/HatArticles";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin/singin.signup.component";
import { auth } from "./firebase/firebase.utils";
import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedUser: null,
        };
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        // subscribe to auth
        this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
            this.setState({ loggedUser: user });
            console.log(user);
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render = () => {
        const { loggedUser } = this.state;
        return (
            <div>
                <NavHeader currentUser={loggedUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/hats" component={HatArticles} />
                    <Route path="/signin" component={SignInSignUp} />
                </Switch>
            </div>
        );
    };
}

export default App;
