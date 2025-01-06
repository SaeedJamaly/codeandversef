import theme from "./theme";

export const styles = {
    pageContainer: {
        position: 'relative',
        minHeight: '100vh',
        overflowX: 'hidden',
        backgroundImage: 'url(/se5.jpeg)',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pageTitle: {
        position: 'relative',
        padding: '2px',
        marginTop: '120px',
        fontWeight: 700,
        textAlign: 'center',
        color: '#d3d3d3',
        [theme.breakpoints.down('md')]: {
          marginTop: '200px',
          fontSize: '1.5rem',
          fontWeight: 700,
        },
    },
    pageSubtitle: {
      textAlign: 'center',
      textShadow: '0 0 1px #d3d3d3, 0 0 1px #d3d3d3, 0 0 1px #d3d3d3',
      marginTop: 3,
      color: '#bababa',
    },
    projectsContainer: {
      marginTop: 5,
      marginBottom: 10,
    },
    projectCard: {
      padding: 3,
      backgroundColor: 'rgba(150, 150, 150, 0.2)',
      borderRadius: 3,
    },
    projectTitle: {
        textAlign: 'center',
        fontWeight: 600,
        color: '#9c9c9c',
    },
    projectDescription: {
      color: '#d3d3d3',
      textAlign: 'justify',
    },
    divider: {
      marginTop: 2,
      marginBottom: 2,
    },
    technologiesBox: {
      marginTop: 8,
    },
    technologiesTitle: {
        color: '#d3d3d3',
        textAlign: 'center',
        fontWeight: 600,
    },
    items: {
        '& .MuiListItemText-primary': {
            color: '#9c9c9c',
          },
          '& .MuiListItemText-secondary': {
            color: '#9c9c9c',
          }
    },
    callToAction: {
      marginTop: 5,
      marginBottom: 15,
      justifyContent: 'center',
    },
    button: {
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
    footer: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '10px',
        textAlign: 'left',
        color: '#d3d3d3',
        fontSize: '14px',
        zIndex: 10,
    },
  };
  