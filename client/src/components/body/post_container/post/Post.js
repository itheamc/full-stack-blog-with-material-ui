import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import { useStyles } from "./Styles";



const Post = ({post}) => {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Card className = {classes.post_card}>
            <CardActionArea>
                <CardMedia
                    className = {classes.postImage}
                    component="img"
                    alt="Contemplative Reptile"
                    image={!post ? "https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/05/facebook-on-iphone-hero.jpg" : post.post_image}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {post?.post_title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {post?.post_body}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
      </Card>
        </div>
  
    );
}

export default Post
