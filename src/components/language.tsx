import { Language } from '@mui/icons-material';
import React, { createContext, useContext, useState, useEffect } from 'react';

const translations: Record<string, Record<string, string>> = {
    Eng: {
        Projects: 'Projects',
        AIMath: 'AI/Math',
        Notes: 'Notes',
        About: 'About',
        Contact: 'Contact',
        Language: 'Language',
    },
    Farsi: {
        Projects: 'پروژه‌ها',
        AIMath: 'هوش مصنوعی/ریاضیات',
        Notes: 'یادداشت‌ها',
        About: 'درباره',
        Contact: 'تماس',
        Language: 'زبان',
    },
    Fr: {
        Projects: 'Projets',
        AIMath: 'IA/Math',
        Notes: 'Notes',
        About: 'À propos',
        Contact: 'Contact',
        Language: 'Langue',
    },
};

const LanguageContext = createContext<{
    language: string;
    setLanguage: (lang: string) => void;
    t: (key: string) => string;
}>({
    language: 'Eng',
    setLanguage: () => {},
    t: (key) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [language, setLanguage] = useState(() => {
        const savedLanguage = localStorage.getItem('language');
        return savedLanguage || 'Eng';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const t = (key: string) => translations[language]?.[key] || key;

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );    
};

export const useLanguage = () => useContext(LanguageContext);