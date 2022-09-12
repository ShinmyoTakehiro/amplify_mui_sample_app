import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import './'
import './index.css';
import App from './App';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from './theme/index'
// const [isSidebarOpen, setSidebarOpen] = useState<boolean>(true);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

  // console.log({isSidebarOpen});
  // console.log({setSidebarOpen});
root.render(
  <React.StrictMode>
     <ThemeProvider theme={darkTheme}>
      <Navbar/>
      <App />
      <Sidebar/>
      </ThemeProvider>
  </React.StrictMode>
);