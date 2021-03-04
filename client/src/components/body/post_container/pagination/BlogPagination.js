import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
    width: 'fit-content',
    margin: 'auto',
  },
}));

const BlogPagination = () => {
  const classes = useStyles();

  const handleChange = (event, value) => {
    console.log(value);
  };

  return (
    <div className={classes.root}>
      <Pagination count={10} shape="rounded" onChange={handleChange} size = 'small' />
    </div>
  );
}

export default BlogPagination;
