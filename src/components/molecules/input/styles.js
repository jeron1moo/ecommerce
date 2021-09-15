import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.c1.H,
    borderRadius: '12px',
    padding: '12px 24px',
    maxHeight: '42px',
    minWidth: '320px',
    boxSizing: 'border-box',
  },
  input: {
    color: theme.palette.c1.C,
    fontSize: theme.typography.bodyDefault.fontSize,
    fontWeight: theme.typography.bodyDefault.fontWeight,
    fontHeight: theme.typography.bodyDefault.fontHeight,
    flex: 1,
  },
  mail: {
    color: theme.palette.c1.A,
    width: '16px',
    height: '16px',
    paddingRight: '12px',
  },
  lable: {
    color: theme.palette.c1.A,
    fontSize: theme.typography.s6Default.fontSize,
    fontWeight: theme.typography.s6Default.fontWeight,
    fontHeight: theme.typography.s6Default.fontHeight,
    fontFamily: theme.typography.fontFamily,
  },
}));
