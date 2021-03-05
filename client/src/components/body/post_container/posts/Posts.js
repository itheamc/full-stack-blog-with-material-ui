import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from "./Styles";
import Post from '../post/Post'

const Posts = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <div className={classes.root}>
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </div>

        </Grid>
    )
}

export default Posts
