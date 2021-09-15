import React from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import NavHeader from "./components/header/header.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import HatArticles from "./pages/articles/hats/HatArticles";
import HomePage from "./pages/home/HomePage";
import ShopPage from "./pages/shop/shop.component";
import SignInSignUp from "./pages/signin/singin.signup.component";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
    unsubscribeFromAuth = null;

    componentDidMount() {
        const { setLoggedUser } = this.props;

        // subscribe to auth
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth); // persist sign in user to database

                // subscribe to data change
                userRef.onSnapshot((snp) => {
                    // once user stored in database ,
                    setLoggedUser({
                        // ((1) - see below) pass data to reducer
                        id: snp.id,
                        ...snp.data(),
                    });
                });
            }
        });
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render = () => {
        return (
            <div>
                <NavHeader />
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

const mapStateToProps = (rootReducerState) => ({
    currentUser: rootReducerState.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
    // setLoggedUser will be passed as props to App (1)
    setLoggedUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
