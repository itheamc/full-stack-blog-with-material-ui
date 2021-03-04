import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BigScreenNavBar from "../header/navbar/BigScreenNavBar";
import SmallScreenNavBar from "../header/navbar/SmallScreenNavBar";
import BlogPagination from '../body/post_container/pagination/BlogPagination'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  main_container: {
    marginTop: 0,
  },
  paper: {
    // padding: theme.spacing(2),
    // textAlign: "center",
    // color: theme.palette.text.secondary
  },
  header: {
    backgroundColor: "red"
  },
  postContainer: {
    // backgroundColor: "yellow"
  },
  sidebar: {
    backgroundColor: "blue"
  },
  footer: {
    backgroundColor: "orange"
  }
}));

// Setting the max width for SmallScreen
const maxWidth = 1200;
// Minimum width for sidebar to be visible
const minWidth = 1023;

const Layout = () => {
  const classes = useStyles();
  const [width, setwidth] = useState(window.innerWidth);


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
              {width > maxWidth ? <BigScreenNavBar /> : <SmallScreenNavBar />}
          </Paper>
        </Grid>
        <Grid item xs={width > minWidth ? 8 : 12}>
            <BlogPagination />
        </Grid>
        <Grid item xs={width > minWidth ? 4 : false}>
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
