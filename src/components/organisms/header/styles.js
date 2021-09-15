import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.c1.H,
    alignItems: 'center',
    padding: '40px 45px 40px 40px',
    width: '100%',
    justifyContent: 'space-between',
  },
  search: {
    width: '500px',
  },
}));
