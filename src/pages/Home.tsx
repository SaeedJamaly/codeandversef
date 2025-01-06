import React from 'react';
import { Container, Typography, Box, CssBaseline } from '@mui/material';
import SolarSystem from '../components/SolarSystem';
import { Helmet } from 'react-helmet';
import Menu from '../components/Menu';
import HomeStyles from '../styles/HomeStyles';
import { useLanguage } from '../components/language';

const Home = () => {

  const { t } = useLanguage();

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Code and Verse",
              "url": "https://codeandverse.info",
              "description": "Portfolio of Saeed Jamali Fashi, showcasing SupplyBoard project in AI and manufacturing industry",
              "mainEntityOfPage": {
                "@type": "WebSite",
                "name": "Code and Verse",
                "url": "https://codeandverse.info"
              }
            }
          `}
        </script>
      </Helmet>
      <Box sx={HomeStyles.root}>
        <CssBaseline />
        <Menu />
        <SolarSystem />

        {/* Main content section */}
        <Box sx={HomeStyles.contentContainer}>
          <Container>
            <Typography variant="h3" sx={HomeStyles.headerText}>
              Saeed Jamali
            </Typography>
            <Typography variant="h5" sx={HomeStyles.subText}>
              Software Engineer
              <br />
              <Typography variant='h5' sx={HomeStyles.subtext2}>
                Visit my SupplyBoard project
              </Typography>
            </Typography>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Home;
