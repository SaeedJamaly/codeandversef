/**
 * @package blog
 * @file theme.ts
 * @description Global theme design.
 * @date_modified 2024-09-28
 * @author Saeed Jamali Fashi
 * @contact saeedjamalifashy@gmail.com
 */

import { createTheme } from '@mui/material/styles';
import '@fontsource/poppins';

const theme = createTheme({
    // Breakpoints for responsive design
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            lg: 1280,
            xl: 1920,
        },
    },
    // Colors
    palette: {
        primary: {
            main: '#1976d2',      // Sexy Blue
            // main: '#0000d1',   // Navy Blue 
            // main: '#1591ea',   // Sky Blue
            // main: '#1a3a5f',   // Dirty Blue
            // main: '#1d2951',   // Yale Blue
            // main: '#123456',   // Balanced Dirty Blue
            light: '#0059ff',     // Lighter Blue
            dark: '#001F4D',      // Darker Blue
            contrastText: '#f8f9f9', // Contrast text color
        },
        secondary: {
            main: '#ffffff',     // White
            light: '#f8f9f9',
            dark: '#F2F2F2',     // 5% darker white
        },
        info: {
            // Used for Buttons
            main: '#002366',   // Navy Blue
            light: '#0000d1',   // Sky Blue
            // light: '#1591ea',
            // main: '#1a3a5f',   // Dirty Blue
            // main: '#1d2951',   // Yale Blue
            // main: '#123456',   // Balanced Dirty Blue
        },
        common: {
            black: '#333333',    // 5% lighter black
        },
    },
    // Font and Typography
    typography: {
        fontFamily: 
        // 'Lato'
        // 'Montserrat'
        'Poppins'
        // 'Nunito'
        // 'Raleway'
        // 'Source Sans Pro'
        // 'Merriweather'
        // 'Playfair Display'
        // 'Lato',
        // 'Arial',
        //'-apple-system',
        // 'BlinkMacSystemFont',
        // '"Segoe UI"',
        // 'Roboto',
        // '"Helvetica Neue"',
        // 'Arial',
        // 'sans-serif',
        // '"Apple Color Emoji"',
        // '"Segoe UI Emoji"',
        // '"Segoe UI Symbol"',
        
    },
    // Shape
    shape: {
        borderRadius: 3,
    },
});

export default theme;
