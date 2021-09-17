import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '16px 45px',
  },
  link: {
    color: theme.palette.c2.A,
    textDecoration: 'none',
  },
  info: {
    display: 'flex',
    gap: '36px',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    gap: '36px',
    justifyContent: 'space-between',
  },
}));
