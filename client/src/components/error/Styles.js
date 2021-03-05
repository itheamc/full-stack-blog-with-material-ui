import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'absolute',
        },
        errorDiv: {
            display: 'flex',
            position: 'relative',
            alignSelf: 'center',
            margin: 'auto'
        }
  }));