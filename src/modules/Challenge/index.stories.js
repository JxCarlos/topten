import React from 'react'
import { storiesOf } from '@storybook/react'
import { Grid, Typography, Divider } from '@material-ui/core';
import { TopTenModuleView } from './topTenModuleView';

storiesOf('Challenge', module)
    .add('Component', () => {
        return (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant="h3">Jr. Front End Challenge</Typography>
                    <Divider />
                </Grid>
                <Grid item>
                    <TopTenModuleView />
                </Grid>
            </Grid>
        )
    })