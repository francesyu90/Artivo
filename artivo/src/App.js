import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import CustomizedNavBar from './components/CustomizedNavBar';
import SignupPage from './pages/SignupPage';
import HomePage from './pages/HomePage';

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

        const { userProfiles } = this.state;

        return (
            <div className="App">

                <CustomizedNavBar />

                <div className="app-body">

                    <Route 
                        exact path="/" 
                        render={() => <HomePage userProfiles={userProfiles} />} 
                    />

                    <Route 
                        path="/signup" 
                        render={() => <SignupPage addUserToList={this.addUserToList} />} 
                    />

                </div>
            </div>
        );
    }
}

export default App;
