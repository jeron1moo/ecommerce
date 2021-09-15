import { makeStyles } from '@material-ui/core/styles';

const SIZES = {
  LG: 'lg',
  MD: 'md',
  SM: 'sm',
};

export default makeStyles((theme) => ({
  root: {
    color: theme.palette.c1.A,
    minWidth: (props) => {
      switch (props.size) {
        case SIZES.LG: {
          return '148px';
        }
        case SIZES.MD: {
          return '84px';
        }
        case SIZES.SM: {
          return '76px';
        }
        default:
          return '148px';
      }
    },
    height: (props) => {
      switch (props.size) {
        case SIZES.LG: {
          return '56px';
        }
        case SIZES.MD: {
          return '48px';
        }
        case SIZES.SM: {
          return '36px';
        }
        default:
          return '56px';
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
    borderRadius: '12px',
    boxSizing: 'border-box',
    background: 'transparent',
    transition: 'all 150ms ease-out',
  },
  stroke: {
    border: `2px solid ${theme.palette.c2.C}`,
  },
  colored: {
    border: `3px solid ${theme.palette.c2.B}`,
    background: theme.palette.c2.A,
    color: theme.palette.c1.J,
    '&:hover': {
      background: theme.palette.c2.A,
    },
  },
  bright: {
    background: theme.palette.c1.F,
  },
  simple: {
    background: theme.palette.c1.J,
  },
  arrow: {
    color: theme.palette.c2.A,
  },
}));
