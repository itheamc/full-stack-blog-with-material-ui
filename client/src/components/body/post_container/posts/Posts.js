import React from 'react'
import { Grid } from '@material-ui/core'
import { useStyles } from "./Styles";
import Post from '../post/Post'
// import { posts } from './Samples'

const Posts = ({posts}) => {
    const classes = useStyles();

    return (
        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            >
                <div className={classes.root}>
                    {posts?.map(post => <Post key = {post._id} post = {post} />)}
                </div>

        </Grid>
    )
}

export default Posts
