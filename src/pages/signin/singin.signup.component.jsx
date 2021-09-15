import React from "react";
import SignIn from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";
import "./signin.signup.style.scss";

const SignInSignUp = () => {
    return (
        <div className="signin-signup">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInSignUp;
