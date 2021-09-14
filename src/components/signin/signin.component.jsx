import React from "react";
import CustomButton from "../button/button.component";
import FormInputField from "../input/formInput.component";
import "./signin.style.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.setState({
            email: "",
            password: "",
        });
    };

    handleValueChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const { email, password } = this.state;
        return (
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleFormSubmit}>
                    <FormInputField
                        type="email"
                        label="email"
                        value={email}
                        handleChange={this.handleValueChange}
                        name="email"
                        required
                    />
                    <FormInputField
                        type="password"
                        label="password"
                        value={password}
                        handleChange={this.handleValueChange}
                        name="password"
                        required
                    />
                    <div className="sign-buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton
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
