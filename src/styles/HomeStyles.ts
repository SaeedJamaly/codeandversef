import theme from "./theme";

const HomeStyles = {
    root: {
      position: 'relative',
      height: '100vh',
      width: '100%',
      overflow: 'hidden',
      fontFamily: 'Poppins',
    },
    contentContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'top',
      color: '#d3d3d3',
      WebkitBackgroundClip: 'text',
      textShadow: '0 0 1px #d3d3d3, 0 0 1px #d3d3d3, 0 0 1px #d3d3d3',
      textAlign: 'center',
      zIndex: 1,
    },
    headerText: {
      fontWeight: 800,
      marginTop: '100px',
      marginBottom: 2,
      fontFamily: 'Poppins',
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        fontWeight: 500,
        marginTop: '200px'
      },
    },
    subText: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '100vh',
        width: '100%',
        marginBottom: 0,
        [theme.breakpoints.down('md')]: {
            fontSize: '1.3rem',
            fontWeight: 500,
            marginTop: '0'
        },
    },
    subtext2: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
      width: '100%',
      marginBottom: 0,
      [theme.breakpoints.down('md')]: {
          fontSize: '1.3rem',
          fontWeight: 500,
          marginTop: '0'
      },
    },
    button: {
      fontSize: 16,
    },
  };
  
  export default HomeStyles;
  