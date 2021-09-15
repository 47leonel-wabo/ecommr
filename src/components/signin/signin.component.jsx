import React from "react";
import CustomButton from "../button/button.component";
import FormInputField from "../input/formInput.component";
import "./signin.style.scss";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorMessage: "",
            isAnError: false,
        };
    }

    handleFormSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: "",
                errorMessage: "",
                isAnError: false,
            });
        } catch (error) {
            console.error("ERROR SIGN IN", error.message);
            this.setState({
                errorMessage: `${error.message}`,
                isAnError: true,
            });
        }
    };

    handleValueChange = (event) => {
        this.setState({
            errorMessage: "",
            isAnError: false,
        });
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password, isAnError, errorMessage } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleFormSubmit}>
                    <FormInputField
                        type="email"
                        label="Email"
                        value={email}
                        handleChange={this.handleValueChange}
                        name="email"
                        required
                    />
                    <FormInputField
                        type="password"
                        label="Password"
                        value={password}
                        handleChange={this.handleValueChange}
                        name="password"
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
                    <div className="sign-buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton
                            style={{
                                marginLeft: "8px",
                            }}
                            onClick={signInWithGoogle}
                            isGoogle={true}
                        >
                            Sign In With GOOGLE
                        </CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
