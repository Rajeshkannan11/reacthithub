// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
import AxiosHome from './Pages/AxiosHome'
import AxiosAbout from './Pages/AxiosAbout'
import { Routes,Route } from 'react-router-dom'
import NavBar from './NavBar'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Routes>
      <Route path='/' element = {<AxiosHome/>}></Route>
       <Route path='/about' element = {<AxiosAbout/>}></Route>
      </Routes>
    </div>
  )
}
import { ThemeProvider, useTheme } from './ThemeContext';
import ThemeToggle from './ThemeToggle';


// function App() {
//   const [count, setCount] = useState(0)


const App = () => {
  return (
    <ThemeProvider>
      <ThemedComponent />
      <ThemeToggle />
    </ThemeProvider>
  );
};

const ThemedComponent = () => {
  const { theme } = useTheme();

  const appStyle = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={appStyle}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
    </div>
  );
};

  

export default App


