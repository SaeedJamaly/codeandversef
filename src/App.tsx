import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import theme from './styles/theme';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Notes from './pages/Notes';
import Note1 from './pages/Note1';
import Note2 from './pages/Note2';
import AIandMath from './pages/AIandMath';
import Attention from './pages/Attention';
import NNBasics from './pages/NNBasics';
import ChatBotComponent from './components/ChatBotComponent';

function App() {
  return (
    <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/aiandmath" element={<AIandMath />} />
          <Route path='/al-Khwarizmi'  element={<Note1 />} />    
          <Route path='/purify-your-soul'  element={<Note2 />} />
          <Route path='/attention-is-all-need' element={<Attention />} />
          <Route path='/neural-network-basics' element={<NNBasics />} />
          <Route path='/chat-bot' element={<ChatBotComponent />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
