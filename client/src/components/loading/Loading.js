import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useStyles } from './Styles'

export const Loading = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CircularProgress className = {classes.loadingIcon} size = {75} color = 'secondary'  thickness = {4}/>
        </div>
    )
}

export default Loading;
