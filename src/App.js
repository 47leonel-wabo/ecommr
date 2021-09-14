import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavHeader from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HatArticles from "./pages/articles/hats/HatArticles";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin/singin.signup.component";

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
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); // persist sign in user to database

                // subscribe to data change
                userRef.onSnapshot((snp) => {
                    // once user stored in database
                    this.setState(
                        {
                            loggedUser: {
                                id: snp.id,
                                ...snp.data(),
                            },
                        },
                        () => console.log("LOGGED USER", this.state.loggedUser)
                    );
                });
            } else {
                // if userAuth is null, it means logout
                this.setState({
                    loggedUser: userAuth,
                });
            }
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
