import React, { Component } from 'react';

import Select from '@material-ui/core/Select';
import { FormControl, InputLabel, MenuItem } from '@material-ui/core';

class SearchSideBar extends Component {

    state = {
        location: '',
        skillsToLearn: '',
        skillsToTeach: ''
    }

    handleChangeLocation = (event) => {
        this.setState({
            location: event.target.value
        })
    }

    handleChangeSkillsToL = (event) => {
        this.setState({
            skillsToLearn: event.target.value
        })
    }

    handleChangeSkillsToT = (event) => {
        this.setState({
            skillsToTeach: event.target.value
        })
    }

    render() {

        const { location, skillsToLearn, skillsToTeach } = this.state;

        return (
            <form>

                <FormControl style={{minWidth:'10em'}}>
                    <InputLabel htmlFor="location-select">Location</InputLabel>
                    <Select
                        value={location}
                        onChange={this.handleChangeLocation}
                        inputProps={{
                        name: 'location',
                        id: 'location-select',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />
                <FormControl style={{minWidth:'10em'}}>
                    <InputLabel htmlFor="skills-to-learn-select">Skills to Learn</InputLabel>
                    <Select
                        value={skillsToLearn}
                        onChange={this.handleChangeSkillsToL}
                        inputProps={{
                        name: 'skills-to-learn',
                        id: 'skills-to-learn-select',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />
                <FormControl style={{minWidth:'10em'}}>
                    <InputLabel htmlFor="skills-to-teach-select">Skills to Teach</InputLabel>
                    <Select
                        value={skillsToTeach}
                        onChange={this.handleChangeSkillsToT}
                        inputProps={{
                        name: 'skills-to-teach',
                        id: 'skills-to-teach-select',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </form>
        );
    }
}

export default SearchSideBar;