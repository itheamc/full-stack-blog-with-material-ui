import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      margin: 'auto',
      maxWidth: '100%', 
      [theme.breakpoints.up('lg')]: {
        maxWidth: '50%',
      },
      [theme.breakpoints.between('sm', 'lg')]: {
        maxWidth: '90%',
      }
    },
    post_card: {
      margin: '16px',
    },
    postImage: {
      maxHeight: '600px',
      minHeight: '300px',
      width: '100%'
      // height: '250px',
      // [theme.breakpoints.up('lg')]: {
      //   height: '200px',
      // },
      // [theme.breakpoints.up('md')]: {
      //   height: '600px',
      // },
      // [theme.breakpoints.up('sm')]: {
      //   height: '450px',
      // }
      
    },
  }));