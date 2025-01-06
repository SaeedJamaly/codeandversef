import React, { useEffect, useState } from 'react';
import { Box, Button, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { styles } from '../styles/NotesStyles';
import { Helmet } from 'react-helmet';
import MenuBar from '../components/Menu';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/language';

const Notes = () => {

    const { language, setLanguage, t } = useLanguage();

    const content1: Record<'Eng' | 'Farsi' | 'Fr', { title: string; description: string }> = {
        Eng: {
            title: 'Khwarizmi, The Father of Algebra',
            description: "A brief look at the contributions of Khwarizmi, the Father of Algebra, and his revolutionary work in mathematics.",
        },
        Farsi: {
            title: "خوارزمی، پدر جبر",
            description: "نگاهی کوتاه به خوارزمی، پدر جبر، و آثار انقلابی او در ریاضیات",
        },
        Fr: {
            title: "Khwarizmi, Le Père de l'Algèbre",
            description: "Un aperçu des contributions de Khwarizmi, le père de l'algèbre, et de son travail révolutionnaire en mathématiques.",
        }, 
    };

    const selectedContent1 = content1[language as 'Eng' | 'Farsi' | 'Fr'];

    const content2: Record<'Eng' | 'Farsi' | 'Fr', { title: string; description: string }> = {
        Eng: {
            title: 'Purify Your Soul',
            description: "A note on Tazhib and Shamseh, the art associate with purity and refinement with a brief look on its relationship to the mythologies.",
        },
        Farsi: {
            title: "تذهیب",
            description: "نگاهی کوتاه به هنر تذهیب، شمسه و دو داستان شبح اپرا و داستان سیاوش شاهنامه ",
        },
        Fr: {
            title: "Purifie ton âme",
            description: "Une note sur le Tazhib et le Shamseh, l'art associé à la pureté et à l'affinement, avec un aperçu de sa relation avec les mythologies.",
        }, 
    };

    const selectedContent2 = content2[language as 'Eng' | 'Farsi' | 'Fr'];

  return (
    <>
        <Helmet>
            <script type="application/ld+json">
            {`
                {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "name": "My Notes - Code and Verse",
                    "url": "https://codeandverse.info/notes",
                    "author": {
                        "@type": "Person",
                        "name": "Saeed Jamali Fashi"
                    },
                    "datePublished": "2024-12-12",
                    "description": "Visit my notes on history, literature, and astronomy.",
                    "publisher": {
                        "@type": "Organization",
                        "name": "Saeed Jamali Fashi",
                        "url": "https://codeandverse.info"
                    }
                    "mainEntityOfPage": {
                        "@type": "CreativeWork",
                        "name": "Notes",
                        "author": {
                        "@type": "Person",
                        "name": "Saeed Jamali Fashi"
                        },
                        "url": "https://codeandverse.info/notes"
                    }
                }
            `}
            </script>
        </Helmet>

        <CssBaseline />

        <Box sx={styles.root}>
            <MenuBar />
            <Container maxWidth="md" sx={styles.container}>
                {/* Section Title */}
                <Typography variant="h2" sx={styles.title}>
                    Notes
                </Typography>

                <Grid container spacing={3} sx={styles.gridContainer}>

                    <Grid item xs={12} md={6}>
                        <Link to="/al-Khwarizmi" style={{ textDecoration: 'none' }}>
                            <Paper sx={styles.tile}>
                                <Typography variant="h5" 
                                    sx={{
                                        ...styles.tileTitle,
                                        fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                                        }}>
                                    {selectedContent1.title}
                                </Typography>
                                <Box component="img" sx={styles.image} alt="al-Khwarizmi the great mathematician." src = "/Khwarizmi.webp"/>
                                <Typography variant="body2" 
                                    sx={{
                                        ...styles.tileDescription,
                                        fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                                    }}>
                                    {selectedContent1.description}
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Link to="/purify-your-soul" style={{ textDecoration: 'none' }}>
                            <Paper sx={styles.tile} >
                                <Typography variant="h5" 
                                    sx={{
                                    ...styles.tileTitle,
                                    fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                                    }}>
                                {selectedContent2.title}
                                </Typography>
                                <Box component="img" sx={styles.image2} alt="Purify Your Soul." src = "/Disc.jpg"/>
                                <Typography variant="body2" 
                                    sx={{
                                        ...styles.tileDescription,
                                        fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                                        }}>
                                    {selectedContent2.description} 
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>
                </Grid>

                <Grid container spacing={3} sx={styles.callToAction}>
                    <Grid item>
                        <Link to="/">
                            <Button variant="outlined" color="primary" sx={styles.button}>
                            Back to Home
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </Container>

            <Box sx={styles.footer}>
                <Typography variant="body2">
                    Image source: <a href="https://www.cloudynights.com/topic/917829-total-solar-eclipse-2024-images/" target="_blank" rel="noopener noreferrer" style={{ color: '#d3d3d3' }}>cloudynights.com</a>
                </Typography>
            </Box>
        </Box>
    </>
  );
};

export default Notes;
