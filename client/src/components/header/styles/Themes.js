import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    titleContainer: {
      backgroundColor: '#2e1534',
      color: '#fff',
      padding: '2% 5%',
    },
    
    tabContainer: {
      backgroundColor: '#2e1534',
    },
    padding: {
      padding: theme.spacing(3),
    },
    
  }));