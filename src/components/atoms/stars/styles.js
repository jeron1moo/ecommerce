import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: 'auto',
    height: 'auto',
    boxSizing: 'border-box',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
  },
  star: {
    color: theme.palette.c1.A,
    fontSize: 'medium',
  },
}));
