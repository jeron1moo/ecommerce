import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
  },
  link: {
    color: theme.palette.c2.A,
    textDecoration: 'none',
  },
  gap: {
    marginBottom: '16px',
  },
}));
