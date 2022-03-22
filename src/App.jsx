import React, { useState } from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';
import './App.css';
import NavBar from './components/navbar/NavBar';
import ProfileCard from './components/profilecard/ProfileCard';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  console.log(isDarkMode);
  return (
    <div
      className={isDarkMode ? 'dark-mode' : 'light-mode'}
      style={{
        height: '100vh',
      }}
    >
      <div className='appNavBarContainer'>
        <div>
          <NavBar />
        </div>
        <div className='navBarDarkModeToggle'>
          <DarkModeToggle
            onChange={setIsDarkMode}
            isDarkMode={isDarkMode}
            size={50}
          />
        </div>
      </div>
      <section className='section-header'>
        <h1>Sample Profile Card</h1>
      </section>
      <section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <ProfileCard />
      </section>
    </div>
  );
}

export default App;
