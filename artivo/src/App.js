import React, { Component } from 'react';
import './App.css';

import { Grid } from '@material-ui/core/';

import { Route } from 'react-router-dom';

import CustomizedNavBar from './components/CustomizedNavBar';
import SignupForm from './components/SignupForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomizedNavBar />
                <Grid container className="app-body">
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={8}>
                        <Route exact path="/signup" component={SignupForm}></Route>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;
