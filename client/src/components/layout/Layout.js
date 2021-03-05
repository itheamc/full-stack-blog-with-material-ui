import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BigScreenNavBar from "../header/navbar/BigScreenNavBar";
import SmallScreenNavBar from "../header/navbar/SmallScreenNavBar";
import BlogPagination from '../body/post_container/pagination/BlogPagination'
import { useStyles } from './Styles'
import { widths } from './Widths'
import Posts from '../body/post_container/posts/Posts'




const Layout = () => {

  const classes = useStyles();
  const [width, setwidth] = useState(window.innerWidth);

  // UseEffect
  useEffect(() => {

       // listening windows resize event
       window.addEventListener('resize', handleWindowResize);

       // useEffect cleanup function
       return () => {
           window.removeEventListener('resize', handleWindowResize);
       }
  }, []);

  // Creating function to handle the window resize
  const handleWindowResize = () => {
    setwidth(window.innerWidth);
    console.log(window.innerWidth);
  }

  return (
    <div className={`${classes.root} ${classes.main_container}`}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.header}`}>
              {width > widths.lg ? <BigScreenNavBar /> : <SmallScreenNavBar />}
          </Paper>
        </Grid>
        <Grid item xs={width > widths.lg ? 8 : 12}>
            <Posts />
            <BlogPagination />
        </Grid>
        <Grid item xs={width > widths.lg ? 4 : false}>
          <Paper className={`${classes.paper} ${classes.sidebar}`}>
              
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={`${classes.paper} ${classes.footer}`}>
              
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;
