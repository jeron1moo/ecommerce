import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.c1.H,
    alignItems: 'center',
  },
  divider: {
    height: 28,
    margin: 4,
  },
  searchIcon: {
    fontSize: 'medium',
  },
  iconButton: {
    width: '20px',
    height: '20px',
    color: theme.palette.c1.A,
  },
  categoriesList: {
    color: theme.palette.c1.A,
    fontSize: theme.typography.buttonDefault.fontSize,
    fontWeight: theme.typography.buttonDefault.fontWeight,
    fontHeight: theme.typography.buttonDefault.fontHeight,
  },
  categoriesForm: {
    width: 'auto',
  },
  dropDownIcon: {
    color: theme.palette.c2.A,
  },
}));
