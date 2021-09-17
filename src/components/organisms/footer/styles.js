import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.c1.H,
    width: '100%',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    flexDirection: 'column',
    padding: '64px 44px',
    height: '556px',
  },
}));
