import React from 'react';
import { Box, Button, Container, CssBaseline, Grid, Paper, Typography } from '@mui/material';
import { styles } from '../styles/NotesStyles';
import { Helmet } from 'react-helmet';
import MenuBar from '../components/Menu';
import { Link } from 'react-router-dom';

const Notes = () => {

  return (
    <>
        <Helmet>
            <script type="application/ld+json">
            {`
                {
                "@context": "https://schema.org",
                "@type": "CreativeWork",
                "name": "AI and Math - Code and Verse",
                "url": "https://codeandverse.info/aiandmath",
                "author": {
                    "@type": "Person",
                    "name": "Saeed Jamali Fashi"
                },
                "dateCreated": "2024-12-12",
                "description": "Visit my notes on some mathematical concepts and papers.",
                "mainEntityOfPage": {
                    "@type": "WebPage",
                    "name": "AI and Mathematics",
                    "url": "https://codeandverse.info/aiandmath"
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
                        <Link to="/attention-is-all-need" style={{ textDecoration: 'none' }}>
                            <Paper sx={styles.tile}>
                                <Typography variant="h5" sx={styles.tileTitle}>
                                    Attention is All You Need
                                </Typography>
                                <Box component="img" sx={styles.image} alt="al-Khwarizmi the great mathematician." src = "/Transformer.webp"/>
                                <Typography variant="body2" sx={styles.tileDescription}>
                                    A brief look at the paper authored by Vaswani et al. in 2017 that introduces the design and architecture of Transformers.
                                </Typography>
                            </Paper>
                        </Link>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Link to="/neural-network-basics" style={{ textDecoration: 'none' }}>
                            <Paper sx={styles.tile} >
                                <Typography variant="h5" sx={styles.tileTitle}>
                                    Neural Network Basics
                                </Typography>
                                <Typography variant="body2" sx={styles.tileDescription}>
                                    Read a brief description on the basics of Neural Networks
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
