/**
 * @package Blog
 * @file Footer.tsx
 * @description Footer design.
 * @date_modified 2024-09-28
 * @author Saeed Jamali Fashi
 * @contact saeedjamalifashy@gmail.com
 */

import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { footerStyles } from '../styles/FooterStyles'
import { IconButton } from '@mui/material';
import { Facebook, Instagram, LinkedIn, YouTube, Twitter } from '@mui/icons-material';

const Footer: React.FC = () => {

    return (
        <footer>
            <Box sx={footerStyles.footerContainer}>

                <Box sx={footerStyles.linksContainer}>
                    <Box sx={footerStyles.column}>
                        <Link href="/suppliers" sx={footerStyles.footerLink}>For Suppliers</Link>
                        <Link href="/manufacturers" sx={footerStyles.footerLink}>For Manufacturers</Link>
                        <Link href="/categories" sx={footerStyles.footerLink}>Categories</Link>
                        <Link href="/insights" sx={footerStyles.footerLink}>Industry Insights</Link>
                    </Box>

                    <Box sx={footerStyles.column}>
                        <Link href="/models" sx={footerStyles.footerLink}>Our Models</Link>
                        <Link href="/features" sx={footerStyles.footerLink}>Features</Link>
                        <Link href="/guides" sx={footerStyles.footerLink}>Guides</Link>
                    </Box>

                    <Box sx={footerStyles.column}>
                        <Link href="/careers" sx={footerStyles.footerLink}>Careers</Link>
                        <Link href="/terms-of-services" sx={footerStyles.footerLink}>Terms of Service</Link>
                        <Link href="/privacy-policy" sx={footerStyles.footerLink}>Privacy Policy</Link>
                    </Box>

                    <Box sx={footerStyles.column}>
                        <Link href="/contact-supplyboard" sx={footerStyles.footerLink}>Contact Us</Link>
                        <Link href="/about-supplyboard" sx={footerStyles.footerLink}>About Us</Link>
                        <Box sx={footerStyles.footerLink}>Follow Us</Box>
                        <Box sx={footerStyles.socialMediaIconsContainer}>
                            <IconButton href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
                                <LinkedIn sx={footerStyles.socialMediaIcons}/>
                            </IconButton>
                            <IconButton href="https://twitter.com" target="_blank" aria-label="X">
                                <Twitter sx={footerStyles.socialMediaIcons}/>
                            </IconButton>
                            <IconButton href="https://youtube.com" target="_blank" aria-label="YouTube">
                                <YouTube sx={footerStyles.socialMediaIcons}/>
                            </IconButton>
                            <IconButton href="https://instagram.com" target="_blank" aria-label="Instagram">
                                <Instagram sx={footerStyles.socialMediaIcons}/>
                            </IconButton>
                            <IconButton href="https://facebook.com" target="_blank" aria-label="Facebook">
                                <Facebook sx={footerStyles.socialMediaIcons}/>
                            </IconButton>
                        </Box>
                    </Box>
                </Box>

                <Typography variant="body2" sx={footerStyles.footerText}>
                    &copy; {new Date().getFullYear()} SupplyBoard. All rights reserved.
                </Typography>
            </Box>
        </footer>
    );
};

export default Footer;