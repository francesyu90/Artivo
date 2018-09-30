import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class CustomizedNavBar extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" className="c-nav-bar">
                    <Toolbar>
                        <Typography variant="title" color="inherit">
                            Teach2Learn
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default CustomizedNavBar;