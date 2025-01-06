/**
 * @package CanAds
 * @file typography.ts
 * @description Global typography settings.
 * @date_modified 2024-09-29
 * @author Saeed Jamali Fashi
 * @contact saeedjamalifashy@gmail.com
 */

const typography = {
    fontFamily: 'Roboto, sans-serif',
    h1: {
        fontSize: '2.5rem',
        fontWeight: 600,
        lineHeight: 1.2,
    },
    h2: {
        fontSize: '2rem',
        fontWeight: 500,
        lineHeight: 1.3,
    },
    h3: {
        fontSize: '1.75rem',
        fontWeight: 500,
        lineHeight: 1.35,
    },
    h4: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.4,
    },
    h5: {
        fontSize: '1.25rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    h6: {
        fontSize: '1rem',
        fontWeight: 400,
        lineHeight: 1.6,
    },
    body1: {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: 1,
    },
    body2: {
        fontSize: '0.875rem',
        fontWeight: 400,
        lineHeight: 1.6,
    },
    button: {
        fontSize: '1rem',
        fontWeight: 500,
        textTransform: 'none' as const,
    },
    caption: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.5,
    },
    overline: {
        fontSize: '0.75rem',
        fontWeight: 400,
        lineHeight: 1.5,
        textTransform: 'uppercase' as const,
    },
};

export default typography;
