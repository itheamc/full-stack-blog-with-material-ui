import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Drawer, Divider, IconButton } from "@material-ui/core";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Tabs, Tab } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
      },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    drawerItem: {
        backgroundColor: 'grey',
    }
}));


const LeftDrawer = ({open, setOpen}) => {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    
    // Array of the drawer items
    const drawerItems = ['Home', 'HTML', 'JavaScript', 'ReactJs', 'Express', 'Java', 'Android Development'];

    // Function to handle drawer close
    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Function to handle drawer item click
    const handleDrawerItemClick = (event, newValue) => {
        setValue(newValue);
        setTimeout(handleDrawerClose, 200);
        // handleDrawerClose();
    }




    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={open}
            classes={{
                paper: classes.drawerPaper,
            }}>
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </div>
            <Divider />
            <Tabs
                value={value}
                onChange={handleDrawerItemClick}
                aria-label="simple tabs example"
                orientation="vertical"
                variant="standard"
                >
                    {drawerItems.map((text) => (
                    <Tab key = {text} label = {text} />
                    ))}
            </Tabs>
        </Drawer>

    )
}

export default LeftDrawer
