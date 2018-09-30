import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

class CustomizedNavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="c-nav-bar">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            <Link to="/" className="c-button">
                                Teach2Learn
                            </Link>
                        </Typography>
                        <Button 
                            style={{marginLeft: '80em'}}
                        >
                            <Link to="/signup" className="c-button">
                                Signup
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CustomizedNavBar;