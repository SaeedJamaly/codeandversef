import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Grid, Box, CssBaseline } from '@mui/material';
import { styled } from '@mui/system';
import { Email, Phone, LocationOn } from '@mui/icons-material';
import MenuBar from '../components/Menu';
import { Helmet } from 'react-helmet';
import theme from '../styles/theme';
import axios from 'axios';

// Styled components
const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: theme.spacing(8, 2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    color: theme.palette.common.white,
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.grey[700],
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.primary.main,
  },
  '& .MuiInputLabel-root': {
    color: theme.palette.grey[500],
  },
  '&:hover .MuiInputLabel-root': {
    color: theme.palette.primary.main,
  },
}));

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    setIsSubmitting(true);

    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'LBback-189959005.us-east-1.elb.amazonaws.com';
    try {
      const response = await axios.post(`${backendUrl}/contact`, formData);
      setSuccessMessage(response.data.message);
    } catch (err) {
      setError('Something went wrong, please try again.');
      setFormData({ name: '', email: '', message: '' });
    }
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
            <script type="application/ld+json">
            {`
                {
                  "@context": "https://schema.org",
                  "@type": "Article",
                  "name": "Contact Me",
                  "url": "https://codeandverse.info/contact",
                  "author": {
                      "@type": "Person",
                      "name": "Saeed Jamali Fashi"
                  },
                  "dateCreated": "2024-12-12",
                  "description": "Contact my on info@supplyboard.io",
                  "mainEntityOfPage": {
                      "@type": "WebPage",
                      "name": "Contact Me",
                      "url": "https://codeandverse.info/contact"
                  }
                }
            `}
            </script>
      </Helmet>
      <CssBaseline />

      <StyledBox>

        <MenuBar />
        <Container maxWidth="md" sx={{
                marginTop: '50px',
                [theme.breakpoints.down('md')]: {
                  marginTop: '130px'
                },
        }}>
          <Typography variant="h3" sx={{ 
            fontWeight: 700, mb: 4, 
            marginTop: 0,
            [theme.breakpoints.down('md')]: {
              marginTop: theme.spacing(3),
            }, 
            }}>
            Get in Touch
          </Typography>
          <Typography variant="body1" sx={{ mb: 6 }}>
            Whether you are interested in joining us
            <br />
            want to discuss a project, give feedback, or have a chat
            <br /> I am interested.
          </Typography>

          {/* Contact Form */}
          <form onSubmit={handleFormSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Name"
                  variant="outlined"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <StyledTextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  fullWidth
                  label="Message"
                  variant="outlined"
                  required
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{
                    padding: 1.5,
                    fontSize: 18,
                    fontWeight: 'bold',
                    textTransform: 'none',
                  }}
                >
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>

          {/* Contact Details */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 8,
              gap: 3,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email />
              <Typography variant="body1">info@supplyboard.io</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Phone />
              <Typography variant="body1">+1 (514) 566-1989</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <LocationOn />
              <Typography variant="body1">Sherbrooke/Montreal, Quebec, Canada</Typography>
            </Box>
          </Box>
        </Container>
      </StyledBox>
    </>
  );
};

export default Contact;
