import React, { Component } from 'react';

import { Grid } from '@material-ui/core';
import SearchSideBar from '../components/SearchSideBar';

class HomePage extends Component {
    render() {

        const { users } = this.props;

        return (
            <Grid container>
                <Grid item xs={3}>
                    <SearchSideBar />
                </Grid>
                <Grid item xs={9}>
                    9
                </Grid>
            </Grid>
        );
    }
}

export default HomePage;