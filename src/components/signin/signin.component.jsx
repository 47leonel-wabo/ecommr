import React from "react";
import CustomButton from "../button/button.component";
import FormInputField from "../input/formInput.compoenent";
import "./signin.style.scss";

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
                    <CustomButton type="submit">Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
