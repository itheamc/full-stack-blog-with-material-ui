import React, { useState } from 'react'
import { StyledTabs, StyledTab } from "../styles/Components";
import { useStyles } from "../styles/Themes";
import { Typography } from "@material-ui/core";

const BigScreenNavBar = () => {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(event.target.innerText);
    };


    return (
        <div className = {classes.root}>
            <div className = {classes.titleContainer}>
                <Typography variant = "h2">Blog Title</Typography>
            </div>
            <div className={classes.tabContainer}>
                <StyledTabs centered value={value} onChange={handleChange} aria-label="nav-bar">
                    <StyledTab label="Home" />
                    <StyledTab label="HTML" />
                    <StyledTab label="Javascript" />
                    <StyledTab label="ReactJs" />
                    <StyledTab label="Express" />
                    <StyledTab label="Java" />
                    <StyledTab label="Android Development" />
                </StyledTabs>
            </div>
        </div>
    )
}

export default BigScreenNavBar
