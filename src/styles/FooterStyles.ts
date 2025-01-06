import { TheatersOutlined } from '@mui/icons-material';
import theme from '../styles/theme';

export const footerStyles = {
    footerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        padding: theme.spacing(2, 4),
        textAlign: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            padding: theme.spacing(1),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2),
            flexDirection: 'column',
        },
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(3, 6),
        },
        [theme.breakpoints.up('lg')]: {
            padding: theme.spacing(4, 8),
        },
        [theme.breakpoints.up('xl')]: {
            padding: theme.spacing(5, 10),
        },
    },
    linksContainer: {
        display: 'flex',
        justifyContent: 'left',
        width: '100%',
        gap: theme.spacing(2),
        paddingBottom: '1rem',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            gap: theme.spacing(1),
            alignItem: 'center',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            flexDirection: 'column',
            alignItem: 'center',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            flexDirection: 'row',
            gap: theme.spacing(3),
            alignItem: 'left',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            flexDirection: 'row',
            gap: theme.spacing(4),
            alignItem: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            flexDirection: 'row',
            gap: theme.spacing(5),
            alignItem: 'left',
        },
    },
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        margin: '0 10px',
        textAlign: 'left',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.between('xs', 'sm')]: {
            textAlign: 'center',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            textAlign: 'left',
        },
        [theme.breakpoints.between('md', 'lg')]: {
            textAlign: 'left',
        },
        [theme.breakpoints.up('lg')]: {
            textAlign: 'left',
        },
    },
    footerLink: {
        color: theme.palette.secondary.main,
        textDecoration: 'none',
        fontSize: theme.typography.pxToRem(10),
        '&:hover': {
            textDecoration: 'underline',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.pxToRem(8),
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(8),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(10),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.typography.pxToRem(12),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.pxToRem(16),
        },
    },
    socialMediaIconsContainer: {
        display: 'flex',
        justifyContent: 'center',
        color: theme.palette.secondary.dark,
        marginTop: '0px',
    },
    socialMediaIcons: {
        color: theme.palette.secondary.dark,
    },
    footerText: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(1),
        fontSize: theme.typography.pxToRem(10),
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.pxToRem(8),
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: theme.typography.pxToRem(8),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: theme.typography.pxToRem(10),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: theme.typography.pxToRem(12),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: theme.typography.pxToRem(16),
        },
    },
};
