import { makeStyles } from '@material-ui/core/styles';

const SIZES = {
  MD: 'md',
  SM: 'sm',
};

export default makeStyles((theme) => ({
  root: {
    color: theme.palette.c1.A,
    minWidth: (props) => {
      switch (props.size) {
        case SIZES.SM: {
          return '39px';
        }
        case SIZES.MD: {
          return '44px';
        }
        default:
          return '44px';
      }
    },
    height: (props) => {
      switch (props.size) {
        case SIZES.SM: {
          return '18px';
        }
        case SIZES.MD: {
          return '26px';
        }
        default:
          return '26px';
      }
    },
    '&:hover': {
      transform: 'translate3d(0, -2px, 0)',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0 2px 6px 0',
    },
    '&:active': {
      transform: 'translate3d(0, 0, 0)',
    },
    '&:focus': {
      transform: 'translate3d(0, 0, 0)',
    },
    boxSizing: 'border-box',
    background: 'transparent',
    textTransform: 'capitalize',
    transition: 'all 150ms ease-out',
    fontSize: theme.typography.s6Default.fontSize,
    fontWeight: theme.typography.s6Default.fontWeight,
    fontHeight: theme.typography.s6Default.fontHeight,
  },
  stroke: {
    border: `2px solid ${theme.palette.c1.E}`,
    background: 'transparent',
  },
  colored: {
    background: theme.palette.c2.E,
    color: theme.palette.c2.A,
    '&:hover': {
      background: theme.palette.c2.E,
    },
  },
  bright: {
    background: theme.palette.c1.F,
  },
  close: {
    color: theme.palette.c2.A,
  },
}));
