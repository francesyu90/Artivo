import React, {  Component } from 'react';
import '../App.css';

import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import { MenuItem, FormControl, InputLabel, Input } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const ITEM_HEIGHT = 48;

const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const skills = [
    "Art & Craft",
    "Dancing"
]

class SignupForm extends Component {
    
    state = {
        name: '',
        nickname: '',
        postalCode: '',
        email: '',
        skillsToTeach: [],
        skillsToLearn: []
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

    handleChangeSkillsToT(event) {
        this.setState({ skillsToTeach: event.target.value });
    };

    handleChangeSkillsToL(event) {
        this.setState({ skillsToLearn: event.target.value });
    };

    resetFields() {
        this.setState({
            name: '',
            nickname: '',
            postalCode: '',
            email: '',
            skillsToTeach: [],
            skillsToLearn: []
        })
    }

    render() {

        const { 
            name, 
            nickname, 
            postalCode, 
            email, 
            skillsToTeach,
            skillsToLearn
        } = this.state;

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
                    <TextField
                        id="nick-name"
                        label="Nickname"
                        value={nickname}
                        onChange={event => this.handleChangeNickname(event)}
                        margin="normal"
                        style={{marginLeft: '1em'}}
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
                    <TextField
                        id="email"
                        label="Email"
                        value={email}
                        onChange={event => this.handleChangeEmail(event)}
                        margin="normal"
                        type="email"
                        required
                        style={{marginLeft: '1em'}}
                    />
                    <br />
                    <FormControl>
                        <InputLabel
                            htmlFor="skills-to-teach-select"
                        >
                        Skills to Teach
                        </InputLabel>
                        <Select 
                            multiple 
                            value={skillsToTeach}
                            input={<Input id="skills-to-teach-select" />}
                            MenuProps={MenuProps}
                            style={{paddingLeft: '5em'}}
                            onChange={event => this.handleChangeSkillsToT(event)}
                        >
                            {skills.map(skill => (
                                <MenuItem
                                    key={skills.indexOf(skill)}
                                    value={skill}
                                >
                                    {skill}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <FormControl>
                        <InputLabel
                            htmlFor="skills-to-learn-select"
                        >
                        Skills to Learn
                        </InputLabel>
                        <Select 
                            multiple 
                            value={skillsToLearn}
                            input={<Input id="skills-to-learn-select" />}
                            MenuProps={MenuProps}
                            style={{paddingLeft: '5em'}}
                            onChange={event => this.handleChangeSkillsToL(event)}
                        >
                            {skills.map(skill => (
                                <MenuItem
                                    key={skills.indexOf(skill)}
                                    value={skill}
                                >
                                    {skill}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <br />
                    <Button 
                        color="secondary" 
                        variant="outlined"
                        onClick={this.resetFields.bind(this)}
                        style={{marginLeft: '13em'}}
                    >
                        Reset
                    </Button>
                    <Button 
                        color="primary" 
                        variant="outlined"
                        style={{marginLeft: '1em'}}
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}

export default SignupForm;