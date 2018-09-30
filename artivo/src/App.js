import React, { Component } from 'react';
import './App.css';
import CustomizedNavBar from './components/CustomizedNavBar';

class App extends Component {
    render() {
        return (
            <div className="App">
                <CustomizedNavBar />
            </div>
        );
    }
}

export default App;
