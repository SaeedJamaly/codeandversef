import theme from './theme';

export const styles = {
  root: {
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
  container: {
    textAlign: 'center',
    marginTop: 10,
  },
  title: {
    marginBottom: theme.spacing(4),
    fontWeight: 'bold',
    color: '#d3d3d3',
    marginTop: theme.spacing(0),
    [theme.breakpoints.down('md')]: {
      marginTop: 12,
    },
  },
  gridContainer: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      display: "flex",
      flexDirection: "column",
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: theme.spacing(2),
    },
  },
  tile: {
    minHeight: '200px',
    backgroundColor: 'rgba(50, 50, 50, 0.5)',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '300px',
    maxWidth: '100%',
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    },
  },
  image: {
    height: "250px"
  },
  image2: {
    height: "250px",

  },
  tileTitle: {
    textAlign: 'center',
    fontWeight: 600,
    margin: '15px',
    color: '#f0f0f0',
  },
  tileDescription: {
    margin:'20px',
    color: '#d3d3d3',
    textAlign: 'justify',
  },
  caption: {
    fontSize: '10px',
    color: 'white',
    padding: '5px'
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
