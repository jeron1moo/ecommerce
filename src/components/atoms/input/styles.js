import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.c1.H,
    color: theme.palette.c1.C,
    borderRadius: '12px',
    padding: '12px 24px',
    maxHeight: '42px',
    minWidth: '320px',
    boxSizing: 'border-box',
    fontSize: theme.typography.bodyDefault.fontSize,
    fontWeight: theme.typography.bodyDefault.fontWeight,
    fontHeight: theme.typography.bodyDefault.fontHeight,
  },
}));
