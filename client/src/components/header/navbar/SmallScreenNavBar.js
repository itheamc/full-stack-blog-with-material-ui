import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, InputBase } from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import LeftDrawer from '../drawer/LeftDrawer'
import { useStyles } from '../styles/Themes'



const SmallScreenNavBar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
      setOpen(true);
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className = {classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.smallScreenBlogTitle} variant="h6" noWrap>
            Blog Title
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <LeftDrawer open = {open} setOpen = {setOpen} />
    </div>
  );
}

export default SmallScreenNavBar;
