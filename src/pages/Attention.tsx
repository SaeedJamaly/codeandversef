import React from 'react';
import { Box, Container, CssBaseline, Typography, Paper, Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { styles } from '../styles/NoteStyles';
import MenuBar from '../components/Menu';
import { Link } from 'react-router-dom';

const Attention = () => {
  return (
    <>
      <Helmet>
            <script type="application/ld+json">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "name": "Attention is All You Need",
                  "url": "https://codeandverse.info/attention-is-all-need",
                  "author": {
                      "@type": "Person",
                      "name": "Saeed Jamali Fashi"
                  },
                  "dateCreated": "2024-12-12",
                  "description": "Read a brief note the paper.",
                  "mainEntityOfPage": {
                      "@type": "WebPage",
                      "name": "Attention is All You Need",
                      "url": "https://codeandverse.info/attention-is-all-need"
                  }
                }
            `}
            </script>
      </Helmet>

      <CssBaseline />

      <Box sx={styles.root}>
        <MenuBar />
        
        <Container maxWidth="md" sx={styles.container}>
          {/* Page Title */}
          <Typography variant="h2" sx={styles.title}>
            Attention is All You Need
          </Typography>

          {/* Content Section */}
          <Paper sx={styles.contentPaper}>
                <Typography variant="body1" sx={styles.text}>
                    I am writing this note, briefly reading the paper Attention is All You Need. It is not completed yet. 
                </Typography>
          </Paper>


          <Grid container spacing={3} sx={styles.callToAction}>
              <Grid item>
                    <Link to="/notes">
                        <Button variant="outlined" color="primary" sx={styles.button}>
                            Back to Notes
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

export default Attention;
