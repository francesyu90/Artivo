import React, {  Component } from 'react';
import '../App.css';

import TextField from '@material-ui/core/TextField';

class SignupForm extends Component {
    
    state = {
        name: '',
        nickname: '',
        postalCode: '',
        email: ''
    }

    handleChangeName(event) {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeNickname(event) {
        this.setState({
            nickname: event.target.value
        })
    }

    handleChangePostalCode(event) {
        this.setState({
            postalCode: event.target.value
        })
    }

    handleChangeEmail(event) {
        this.setState({
            email: event.target.value
        })
    }

    render() {

        const { name, nickname, postalCode, email } = this.state;

        return (
            <div className="signup-form-div">
                <form className="signup-form">
                    <TextField
                        id="standard-name"
                        label="Name"
                        value={name}
                        onChange={event => this.handleChangeName(event)}
                        margin="normal"
                        autoFocus
                        required
                    />
                    <br />
                    <TextField
                        id="nick-name"
                        label="Nickname"
                        value={nickname}
                        onChange={event => this.handleChangeNickname(event)}
                        margin="normal"
                    />
                    <br />
                    <TextField
                        id="postal-code"
                        label="PostalCode"
                        value={postalCode}
                        onChange={event => this.handleChangePostalCode(event)}
                        margin="normal"
                        required
                    />
                    <br />
                    <TextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={event => this.handleChangeEmail(event)}
                        margin="normal"
                        type="email"
                        required
                    />
                </form>
            </div>
        );
    }
}

export default SignupForm;