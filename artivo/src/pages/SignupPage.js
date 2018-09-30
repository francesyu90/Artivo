import React, { Component } from 'react';

import { Grid } from '@material-ui/core/';

import SignupForm from '../components/SignupForm';

class SignupPage extends Component {

    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid item xs={8}>
                        <SignupForm addUserToList={this.props.addUserToList} />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default SignupPage;