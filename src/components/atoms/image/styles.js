import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 'auto',
    minWidth: '237px',
    minHeight: '180px',
    boxSizing: 'border-box',
    backgroundColor: (props) =>
      props.type === 'dark' ? theme.palette.c1.B : theme.palette.c1.H,
    borderRadius: '12px',
  },
}));
