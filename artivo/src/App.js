import React, { Component } from 'react';
import './App.css';
import CustomizedNavBar from './components/CustomizedNavBar';
import SignupForm from './components/SignupForm';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomizedNavBar />
                <SignupForm />
            </div>
        );
    }
}

export default App;
