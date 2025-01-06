import theme from "./theme";

const MenuStyles = {
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    boxShadow: 'none',
    backdropFilter: 'blur(5px)',
    fontFamily: 'Poppins, sans-serif',
  },
  toolbar: { 
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
},
  leftMenuBox: {
    display: 'flex',
    margin: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      order: 1,
      gap: theme.spacing(0.8),
    },
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
  menuButton: {
    color: 'white',
    border: '0.1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '15px',
    padding: theme.spacing(1, 2),
    fontWeight: '500',
    fontSize: '14px',
    textTransform: 'capitalize',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      borderColor: 'white',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 12,
    },
  },
  rightMenuBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(2),
    gap: theme.spacing(1),
    [theme.breakpoints.down('md')]: {
        margin: theme.spacing(1),
        order: 2,
    },
    [theme.breakpoints.up('md')]: {
      order: 0,
    },
  },
  langMenuBox: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(0),
    gap: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      order: 3,
      gap: theme.spacing(0.8),
    },
    [theme.breakpoints.up('md')]: {
      order: 0,
    },

  },
  lang: {
    color: 'rgba(200, 200, 200, 0.8)',
    '&:hover': {
      color: 'white',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '1.5rem',
    },
  },
  iconButton: {
    color: 'rgba(200, 200, 200, 0.8)',
    '&:hover': {
      color: 'white',
    },
    [theme.breakpoints.down('md')]: {
        fontSize: 5,
    },
  },
  xIcon: {
    fill: 'rgba(200, 200, 200, 0.8)',
    width: '24px',
    height: '24px',
    '&:hover': {
        color: 'white',
    },
  }
};

export default MenuStyles;
