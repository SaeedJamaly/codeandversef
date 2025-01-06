import React from 'react';
import { Container, Typography, Button, Box, Grid, Paper, Divider, List, ListItem, ListItemText, CssBaseline } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import MenuBar from '../components/Menu';
import { styles } from '../styles/ProjectsStyles';

const Projects = () => {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Projects - Code and Verse",
              "url": "https://codeandverse.info/projects",
              "description": "Explore SupplyBoard project, a platform designed to improve procurement process in manufacturing industry.", 
              "mainEntityOfPage": {
                "@type": "CreativeWork",
                "name": "SupplyBoard",
                "author": {
                  "@type": "Person",
                  "name": "Saeed Jamali Fashi"
                },
                "url": "https://codeandverse.info/projects"
              }
            }
          `}
        </script>
      </Helmet>

      <CssBaseline />

      <Box sx={styles.pageContainer}>

        <MenuBar />

        <Container maxWidth="lg">
          {/* Page Title */}
          <Typography variant="h2" sx={styles.pageTitle}>
            SupplyBoard
          </Typography>
          <Typography variant="h5" sx={styles.pageSubtitle}>
            A platform connecting businesses with suppliers for efficient procurement and management
          </Typography>

          <Box sx={styles.projectsContainer}>
            <Grid container spacing={4}>
              {/* Project 1: SupplyBoard */}
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={styles.projectCard}>
                  <Typography variant="h5" sx={styles.projectTitle}>
                    Manufacturers and Suppliers Database
                  </Typography>
                  <Divider sx={styles.divider} />
                  <Typography sx={styles.projectDescription}>
                    SupplyBoard is a platform designed to streamline supplier management and procurement for manufacturers. By using a decentralized, AI-powered directory of suppliers, SupplyBoard offers a seamless experience in finding the right suppliers for various manufacturing needs.
                  </Typography>
                  <Box sx={styles.technologiesBox}>
                    <Typography variant="body2" sx={styles.technologiesTitle}>
                      Technologies Used:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="AI & Machine Learning" secondary="For optimizing supplier search and recommending the best vendors." />
                      </ListItem>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Database Management" secondary="Decentralized Elasticsearch for scalable, fast, and reliable data handling." />
                      </ListItem>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Web Technologies" secondary="Next.js, React, Node.js, on AWS for robust performance and scalability." />
                      </ListItem>
                    </List>
                  </Box>
                </Paper>
              </Grid>

              {/* Project 2: Instant Quoting Model */}
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={styles.projectCard}>
                  <Typography variant="h5" sx={styles.projectTitle}>
                    Instant Quoting System Using Active Learning in Neural Networks & Computational Geometry
                  </Typography>
                  <Divider sx={styles.divider} />
                  <Typography sx={styles.projectDescription}>
                    This model leverages Active Learning in Neural Networks and advanced Computational Geometry to provide instant, accurate pricing quotes. The system continuously learns from new data, offering better predictions over time, ensuring manufacturers get accurate quotes in real-time.
                  </Typography>
                  <Box sx={styles.technologiesBox}>
                    <Typography variant="body2" sx={styles.technologiesTitle}>
                      Technologies Used:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Active Learning in Neural Networks" secondary="Enables continuous improvements in pricing accuracy." />
                      </ListItem>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Computational Geometry" secondary="Optimizes part design and manufacturability to minimize costs." />
                      </ListItem>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Machine Learning Models" secondary="Used to predict real-time quotes from historical data." />
                      </ListItem>
                    </List>
                  </Box>
                </Paper>
              </Grid>

              {/* Project 3: 3D/2D Rendering & Analysis */}
              <Grid item xs={12} md={4}>
                <Paper elevation={3} sx={styles.projectCard}>
                  <Typography variant="h5" sx={styles.projectTitle}>
                    3D/2D Rendering & Design Optimization & format conversion
                  </Typography>
                  <Divider sx={styles.divider} />
                  <Typography sx={styles.projectDescription}>
                    This project involves creating a system for manufacturers to upload 3D/2D CAD designs of parts. The platform uses advanced rendering technologies and computational geometry to analyze and optimize these designs for manufacturability, cost-efficiency, and quality control.
                  </Typography>
                  <Box sx={styles.technologiesBox}>
                    <Typography variant="body2" sx={styles.technologiesTitle}>
                      Technologies Used:
                    </Typography>
                    <List>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Three.js & WebGL" secondary="For high-performance 3D/2D rendering of CAD designs." />
                      </ListItem>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Computer-Aided Design (CAD) Algorithms" secondary="To analyze and optimize part designs." />
                      </ListItem>
                      <ListItem>
                        <ListItemText sx={styles.items} primary="Data Analytics" secondary="For processing and generating insights on manufacturability." />
                      </ListItem>
                    </List>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Box>

          {/* Call to Action */}
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

export default Projects;
