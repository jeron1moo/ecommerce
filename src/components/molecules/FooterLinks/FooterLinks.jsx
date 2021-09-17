import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const links = [
  {
    description: 'Get in touch',
    childs: [
      {
        name: 'About us',
        link: '#',
      },
      {
        name: 'Careers',
        link: '#',
      },
      {
        name: 'Press Releases',
        link: '#',
      },
      {
        name: 'Blog',
        link: '#',
      },
    ],
  },
  {
    description: 'Connections',
    childs: [
      {
        name: 'Facebook',
        link: '#',
      },
      {
        name: 'Twitter',
        link: '#',
      },
      {
        name: 'Instagram',
        link: '#',
      },
      {
        name: 'Youtube',
        link: '#',
      },
      {
        name: 'LinkedIn',
        link: '#',
      },
    ],
  },
  {
    description: 'Earnings',
    childs: [
      {
        name: 'Become an Affiliate',
        link: '#',
      },
      {
        name: 'Advertise your product',
        link: '#',
      },
      {
        name: 'Sell on Market',
        link: '#',
      },
    ],
  },

  {
    description: 'Account',
    childs: [
      {
        name: 'Your account',
        link: '#',
      },
      {
        name: 'Returns Centrer',
        link: '#',
      },
      {
        name: '100 % purchase protection',
        link: '#',
      },
      {
        name: 'Chat with us',
        link: '#',
      },
      {
        name: 'Help',
        link: '#',
      },
    ],
  },
];

const FooterLinks = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      {links.map((link) => {
        return (
          <Box>
            <Typography variant="h4" className={classes.gap}>
              {link.description}
            </Typography>
            {link.childs.map((childLink) => {
              return (
                <Typography variant="body1" className={classes.gap}>
                  <Link className={classes.link} href={childLink.link}>
                    {childLink.name}
                  </Link>
                </Typography>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

export default FooterLinks;
