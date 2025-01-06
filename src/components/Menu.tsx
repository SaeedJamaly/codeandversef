import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Box, IconButton, Button, Menu, MenuItem} from '@mui/material';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { useLanguage } from './language';
import MenuStyles from '../styles/MenuStyles';

const fetchUserLocation = async (): Promise<string> => {
  try {
    const response = await fetch('https://ipapi.co/json/'); // Geolocation API
    const data = await response.json();
    return data.country;
  } catch (error) {
    console.error('Error fetching IP location:', error);
    return '';
  }
};

const MenuBar = () => {

  const { language, setLanguage, t } = useLanguage();
  const [languageAnchor, setLanguageAnchor] = useState<null | HTMLElement>(null);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else {
      const setDefaultLanguage = async () => {
        const country = await fetchUserLocation();
        if (country === 'IR') {
          setLanguage('Farsi');
        } else {
          setLanguage('Eng');
        }
      };
      setDefaultLanguage();
    }
  }, [setLanguage]);

  const handleLanguageClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setLanguageAnchor(event.currentTarget);
  };

  const handleLanguageClose = (language?: string) => {
    setLanguageAnchor(null);
    if (language) {
      setLanguage(language);
      localStorage.setItem('language', language);
    }
  };

  return (
    <AppBar position="fixed" sx={MenuStyles.appBar}>
      <Toolbar sx={MenuStyles.toolbar}>
        {/* Left Section: Menu Items */}
        <Box sx={MenuStyles.leftMenuBox}>
          {['Projects', 'AI/Math','Notes','About', 'Contact'].map((key) => (
            <Button
              key={key}
              component={Link}
              to={`/${key === 'AI/Math' ? 'aiandmath' : key.toLowerCase().replace(/\s+/g, '')}`}
              sx={{...MenuStyles.menuButton, fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif'}}
            >
              {t(key)}
            </Button>
          ))}
        </Box>

        {/* Right Section: Icons */}
        <Box sx={MenuStyles.rightMenuBox}>
          <IconButton
            href="https://www.linkedin.com/in/saeedjamalifashi/"
            target="_blank"
            sx={{
              ...MenuStyles.iconButton,
              '&:hover': { color: '#0e76a8' },
            }}
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
          <IconButton
            href="https://github.com/saeedJamaly"
            target="_blank"
            sx={{
              ...MenuStyles.iconButton,
              '&:hover': { color: '#171515' },
            }}
          >
            <GitHubIcon fontSize="medium" />
          </IconButton>
          <IconButton
            href="https://x.com/SaeedJamaly"
            target="_blank"
            sx={{
              ...MenuStyles.iconButton,
              '&:hover': { color: '#1DA1F2' },
            }}
          >
            <img
                src="/x.png"
                alt="X Icon"
                style={MenuStyles.xIcon}
            />
          </IconButton>

        </Box>

        {/* Languages */}
        <Box sx={MenuStyles.langMenuBox}>
          <Button
            onClick={handleLanguageClick}
            sx={{...MenuStyles.lang, fontFamily: language === 'Farsi' ? 'B Nazanin, sans-serif' : 'Poppins, sans-serif'}}
          >
            {t('')} {language}
          </Button>
          <Menu
            anchorEl={languageAnchor}
            open={Boolean(languageAnchor)}
            onClose={() => handleLanguageClose()}
          >
            {['Eng', 'Farsi', 'Fr'].map((lang) => (
              <MenuItem key={lang} onClick={() => handleLanguageClose(lang)}>
                {lang}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
