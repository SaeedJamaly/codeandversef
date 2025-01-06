import React from 'react';
import { Box, Container, Typography, Grid, CssBaseline, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStyles } from '../styles/AboutStyles';
import Menu from '../components/Menu';

const About = () => {
  const styles = useStyles();

  return (
    <>
      <CssBaseline />
      <Box sx={styles.root}>
        
        <Menu />
        
        <Container maxWidth="md" sx={styles.container}>
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Typography variant="h2" sx={styles.title}>
              About Me
            </Typography>
          </motion.div>

          {/* Introduction Section */}
          <Box sx={styles.introduction}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Typography variant="h5" sx={styles.introductionText}>
                I&apos;m interested in software engineering, mathematics, and solving problems. I am currently working on SupplyBoard, a platform designed to optimize time, cost, precision, and efficiency in industrial procurement..
              </Typography>
            </motion.div>
          </Box>



          {/* Vertical Timeline */}
          <Box sx={{ position: 'relative', marginLeft: '30px' }}>
            {/* Vertical Line */}
            <Box
              sx={styles.line}
            ></Box>

            {/* Year Points and Explanations */}
            <Grid container direction="column" spacing={4} sx={styles.gridContainer}>
            <Grid item>
                <Box sx={styles.paper}>
                  {/* Point for 2023 */}
                  <Box sx={styles.points}/>
                    <Box sx={{ marginLeft: '30px' }}>
                      <motion.div
                          initial={{ opacity: 0, x: -50 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 1, delay: 0.5}}
                          viewport={{ once: true }}
                      >
                        <Typography variant="h6" sx={styles.paperTitle}>
                          Concordia University, 2023
                          <br />
                          Master of Computer Science
                        </Typography>
                        <Typography variant="body1" sx={styles.paperText}>
                          I completed my master&apos;s degree in Computer Science from Concordia University in Montreal, where I explored topics in programming, problem solving, software engineering, artificial intelligence, and machine learning.
                        </Typography>
                      </motion.div>
                    </Box>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={styles.paper}>
                  {/* Point for 2017 */}
                  <Box sx={styles.points}/>
                  <Box sx={{ marginLeft: '30px' }}>
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.5}}
                      viewport={{ once: true }}
                    >
                      <Typography variant="h6" sx={styles.paperTitle}>
                        EMU, Cyprus, 2017
                        <br />
                        Master's
                        <br />
                        Electrical & Electronics Engineering (Signal Processing)
                      </Typography>
                      <Typography variant="body1" sx={styles.paperText}>
                        I obtained a Master&apos;s degree in Electronics from Eastern Mediterranean University, where I studied topics in signal processing, wavelet transform, dictionary learning, image processing, super-resolution with a strong interest in computer science.
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </Grid>
              <Grid item>
                <Box sx={styles.paper}>
                  {/* Point for 2012 */}
                  <Box sx={styles.points}/>
                  <Box sx={{ marginLeft: '30px' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.5}}
                        viewport={{ once: true }}
                    >
                      <Typography variant="h6" sx={styles.paperTitle}>
                        IKIU, Iran, 2012
                        <br />
                        Bachelor of Electrical & Electronics Engineering (Control)
                      </Typography>
                    </motion.div>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>

          {/* Personal Journey Section */}
          <Box sx={styles.section}>
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Typography variant="h4" sx={styles.sectionTitle}>
                A note about SupplyBoard 
              </Typography>

              <Typography variant="body1" sx={styles.personalJourneyText}>
                I spend most of my time developing the SupplyBoard platform, an idea that took shape in my mind after experiencing the problem firsthand over the course of more than 10 years. I observed significant challenges in the distribution of manufacturers and industrial vendors in North American urban development. This natural distribution often makes the processes of procurement, supplier selection, and vendor selection complicated, time-consuming, and problematic.
                To address this, I began designing a platform to simplify and streamline these processes, and save manufacturing businesses huge amount of time and resources. I believe this challenge can be effectively solved with the power of software and AI technology.
                Anyone interested in neural networks, computational geometry, or product design is welcome to join and collaborate in shaping this vision. Today, I continue to learn and grow as I contribute to the tech industry and share my journey with others.
              </Typography>
            </motion.div>
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

export default About;
