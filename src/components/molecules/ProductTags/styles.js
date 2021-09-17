import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.c1.H,
    boxSizing: 'border-box',
    height: '112px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  tags: {
    height: '68px',
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
}));
