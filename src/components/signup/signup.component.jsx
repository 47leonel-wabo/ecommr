import React from "react";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import CustomButton from "../button/button.component";
import FormInputField from "../input/formInput.component";
import "./signup.style.scss";

class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
            errorMessage: "",
            isAnError: false,
        };
    }

    handleSignUp = async (event) => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password.trim().length < 5) {
            this.setState({
                isAnError: true,
                errorMessage: "Password should holds at least 6 characters!",
            });
            return;
        }

        if (password !== confirmPassword) {
            this.setState({
                isAnError: true,
                errorMessage: "Password and confirm password not match!",
            });
            return;
        }

        try {
            // create user and return authenticated object
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            console.log("USER ", user);

            await createUserProfileDocument(user, { displayName });

            // free the form
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: "",
                errorMessage: "",
                isAnError: false,
            });
        } catch (error) {
            console.error("SIGN UP ERROR", error.message);
        }
    };

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            isAnError: false,
        });
    };

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword,
            isAnError,
            errorMessage,
        } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>Sign up with an email and password</span>
                <form onSubmit={this.handleSignUp} className="sign-up-form">
                    <FormInputField
                        type="text"
                        label="Display name"
                        value={displayName}
                        handleChange={this.handleInputChange}
                        name="displayName"
                        required
                    />
                    <FormInputField
                        type="email"
                        label="Email"
                        value={email}
                        handleChange={this.handleInputChange}
                        name="email"
                        required
                    />
                    <FormInputField
                        type="password"
                        label="Password"
                        value={password}
                        handleChange={this.handleInputChange}
                        name="password"
                        required
                    />
                    <FormInputField
                        type="password"
                        label="Confirm Password"
                        value={confirmPassword}
                        handleChange={this.handleInputChange}
                        name="confirmPassword"
                        required
                    />
                    {isAnError && (
                        <div
                            style={{
                                textAlign: "center",
                                margin: "8px 0",
                                padding: "2px 8px",
                                border: "none",
                                color: "#fa072c",
                                backgroundColor: "#ffebee",
                                fontSize: "13px",
                            }}
                        >
                            {errorMessage}
                        </div>
                    )}
                    <div className="sign-up-buttons">
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUp;
