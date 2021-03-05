import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";

import { useStyles } from "./Styles";



const Post = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Card className = {classes.post_card}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="400"
                    image="https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2017/05/facebook-on-iphone-hero.jpg"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Title of the post
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    These are the description of the post. I want to see how it looks like if we will add more text on this.
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
