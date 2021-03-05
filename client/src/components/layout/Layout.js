import React, { useState, useEffect } from "react";
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BigScreenNavBar from "../header/navbar/BigScreenNavBar";
import SmallScreenNavBar from "../header/navbar/SmallScreenNavBar";
import BlogPagination from '../body/post_container/pagination/BlogPagination'
import { useStyles } from './Styles'
import { widths } from './Widths'
import Posts from '../body/post_container/posts/Posts'
import Loading from '../loading/Loading'
import Error from '../error/Error'


// storing the url
const baseurl = "http://localhost:5000/posts"

const Layout = () => {

  const classes = useStyles();
  const [width, setwidth] = useState(window.innerWidth);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  // const [winOffsetY, setWinOffsetY] = useState(0);

  // UseEffect
  useEffect(() => {

    fetchPosts(); // Calling function to fetch posts

       // listening windows resize event
       window.addEventListener('resize', handleWindowResize);
      //  window.onscroll = () => {handleWindowScroll()};
      //  document.addEventListener('scroll', handleWindowScroll);

       // useEffect cleanup function
       return () => {
           window.removeEventListener('resize', handleWindowResize);
          //  document.removeEventListener('scroll', handleWindowScroll);
       }
  });

  // Creating function to handle the window resize
  const handleWindowResize = () => {
    setwidth(window.innerWidth);
    console.log(window.innerWidth);
  }

  // // Function to handle window scroll
  // const handleWindowScroll = () => {
  //   setWinOffsetY(window.pageYOffset);
  //   console.log(window.pageYOffset);
  // }


  // Function to fetch data from the server using axios
  const fetchPosts = () => {
    if (posts.length < 1) {
          axios.get(baseurl)
          .then(response => {
          setPosts(response.data);
          console.log(response.data);
          setIsLoading(false);
          })
          .catch(error => {
          setErr(error.message);
          setIsLoading(false);
          });
    }
  }


  // Returning the components according to the fetching results
  if (isLoading) {
    return (
          <Loading />
    );
    
  } else {
    if (err) {

      return (
          <Error />
      );
    } else {
      return (
        <div className={`${classes.root} ${classes.main_container}`}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Paper className={`${classes.paper} ${classes.header}`}>
                  {width > widths.lg ? <BigScreenNavBar /> : <SmallScreenNavBar />}
              </Paper>
            </Grid>
            <Grid item xs={width > widths.lg ? 8 : 12}>
                <Posts posts = {posts}/>
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
  }

}

export default Layout;
