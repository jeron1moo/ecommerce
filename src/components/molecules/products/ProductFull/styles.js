import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    boxSizing: 'border-box',
    border: `1px solid ${theme.palette.c1.D}`,
    backgroundColor: theme.palette.c1.J,
    borderRadius: '12px',
    display: 'flex',
  },
  content: {
    display: 'flex',
    alignItems: 'center',
  },
  image: {
    width: '268px',
    height: '280px',
  },
  buy: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxHeight: '45px',
  },
  description: {
    marginBottom: '16px',
  },
  stars: {
    marginBottom: '16px',
  },
  caption: {
    color: theme.palette.c1.B,
  },
  discount: {
    color: theme.palette.c1.C,
    textDecorationLine: 'line-through',
  },
  discountTag: {
    position: 'absolute',
    margin: '12px',
  },
}));
