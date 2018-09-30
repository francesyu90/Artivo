import React, { Component } from 'react';
import './App.css';

import { Grid } from '@material-ui/core/';

import { Route } from 'react-router-dom';

import CustomizedNavBar from './components/CustomizedNavBar';
import SignupForm from './components/SignupForm';

class App extends Component {

    state = {
        userProfiles: []
    }

    addUserToList = (userProfile) => {
        this.setState(oldState => ({
            userProfiles: [...oldState.userProfiles, userProfile],
        }));
    }

    render() {
        return (
            <div className="App">
                <CustomizedNavBar />
                <Grid container className="app-body">
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={8}>
                        <Route 
                            path="/signup" 
                            render={() => <SignupForm addUserToList={this.addUserToList} />} 
                        />
                        # of Users: {this.state.userProfiles.length}
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
