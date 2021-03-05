import React from 'react'
import { Typography } from "@material-ui/core";
import { useStyles } from "./Styles";

const Error = () => {
    const classes = useStyles();


    return (
        <div className = {classes.root}>
            <div className = {classes.errorDiv}>
            <Typography variant = 'h3' align = 'center' color = 'error'>Something went wrong!!</Typography>
            </div>
        </div>
    )
}

export default Error;
