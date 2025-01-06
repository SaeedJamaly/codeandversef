import React from 'react';
import { Box, Container, CssBaseline, Typography, Paper, Button, Grid } from '@mui/material';
import { Helmet } from 'react-helmet';
import { styles } from '../styles/NoteStyles';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import MenuBar from '../components/Menu';
import { Link } from 'react-router-dom';
import { useLanguage } from '../components/language';

const NNBasics = () => {

  const { language, setLanguage, t } = useLanguage();
  
  const content: Record<'Eng' | 'Farsi' | 'Fr', { title: string; description: string; body: React.ReactNode }> = {
    Eng: {
      title: 'Neural Network Basics',
      description:
        'Read a brief note about the basics of Neural Networks',
      body: (
            <MathJaxContext>
            <>
                <h1>Basic Linear Algebra</h1>
                <p>Any point in a 2-Dimensional space can be represented by:</p>
                <div style={{ textAlign: 'center' }}><MathJax>{`\\( \\mathbf{y} = \\mathbf{a} \\mathbf{x} + \\mathbf{b} \\)`}</MathJax></div>
                <p>A linear model describes <MathJax inline>{`\\( \\mathbf{y} \\)`}</MathJax> as an affine or linear transformation of <MathJax inline>{`\\( \\mathbf{x} \\)`}</MathJax>:</p>
                <div style={{ textAlign: 'center' }}><MathJax inline>{`\\( \\mathbf{y} = A \\mathbf{x} + \\mathbf{b} \\)`}</MathJax></div>
                <p>This can also be represented in linear equation matrix form:</p>
                <MathJax>
                {`\\[
                \\mathbf{y} =
                \\begin{bmatrix}
                    A & \\mathbf{b}
                \\end{bmatrix}
                \\begin{bmatrix}
                    \\mathbf{x} \\\\
                    1
                \\end{bmatrix}
                \\]`}
                </MathJax>
                <p>To generalize a higher dimensional space (Vector space), the transformation can be represented as:</p>
                <MathJax>
                {`\\[
                \\begin{bmatrix}
                    y_1 \\\\
                    y_2 \\\\
                    \\vdots \\\\
                    y_m
                \\end{bmatrix}
                =
                \\begin{bmatrix}
                    a_{11} & a_{12} & \\cdots & a_{1n} & b_1 \\\\
                    a_{21} & a_{22} & \\cdots & a_{2n} & b_2 \\\\
                    \\vdots & \\vdots & \\ddots & \\vdots & \\vdots \\\\
                    a_{m1} & a_{m2} & \\cdots & a_{mn} & b_m
                \\end{bmatrix}
                \\begin{bmatrix}
                    x_1 \\\\
                    x_2 \\\\
                    \\vdots \\\\
                    x_n \\\\
                    1
                \\end{bmatrix}
                \\]`}
                <p>In machine learning, we normally deal with multiple features (or inputs). In this case, <MathJax inline>{`\\( \\mathbf{x} \\)`}</MathJax> is a vector of features. And the Matrix <MathJax inline>{`\\( \\mathbf{A} \\)`}</MathJax> corresponds to weights.
                 And the question is to find the best matrix <MathJax inline>{`\\( \\mathbf{A} \\)`}</MathJax> so that for a given input features, <MathJax inline>{`\\( \\mathbf{x} \\)`}</MathJax>, we get the best output, <MathJax inline>{`\\( \\mathbf{y} \\)`}</MathJax>.</p>
                <p>This is simply called <strong>Regression</strong>. In fact, the goal is to find the best-fit that minimizes the difference between the actual output, <MathJax inline>{`\\( \\mathbf{y} \\)`}</MathJax>, and the predicted output, <MathJax inline>{`\\( \\hat{y} \\)`}</MathJax>:</p> 
                <div style={{ textAlign: 'center' }}><MathJax inline>{`\\( \\mathbf{Residual} = \\mathbf{y} - \\hat{y} \\)`}</MathJax></div>
                <br />
                <strong>Being completed ...</strong>
                </MathJax>
            </>
            </MathJaxContext>
        ),
    },
    Farsi: {
      title: '',
      description: '',
      body: 'این صفحه فقط به زبان انگلیسی است.',
    },
    Fr: {
      title: "",
      description: "",
      body: 'Cette page est uniquement en anglais',
    },
  };

  const selectedContent = content[language as 'Eng' | 'Farsi' | 'Fr'];
  return (
    <>
      <Helmet>
        <html lang={language.toLowerCase()} />
        <title>{selectedContent.title}</title>
        <meta name="description" content={selectedContent.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            name: "Neural Networks Basics",
            url: "http://localhost:3000/neural-network-basics",
            author: {
            "@type": "Person",
            name: "Saeed Jamali Fashi"
            },
            dateCreated: "2024-12-12",
            description: "Read a brief note about linear algebra and Neural Network Basics",
            mainEntityOfPage: {
              "@type": "WebPage",
              name: "Neural Networks Basics",
              url: "http://localhost:3000/neural-network-basics"
            }      
          })}
        </script>
      </Helmet>

      <CssBaseline />

      <Box sx={styles.root}>
        <MenuBar />
        
        <Container maxWidth="md" sx={styles.container}>
          {/* Page Title */}
          <Typography variant="h2" 
            sx={{
            ...styles.title,
            fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif'
            }}>
            {selectedContent.title}
          </Typography>

          {/* Content Section */}
          <Paper sx={styles.contentPaper}>
                <Typography variant="body1" 
                                  sx={{
                                    ...styles.text,
                                    direction: language === 'Farsi' ? 'rtl' : 'ltr',
                                    fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif',
                                  }}>
                    {selectedContent.body}
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

export default NNBasics;
