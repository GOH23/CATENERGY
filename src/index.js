import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/static/Header';
import './styles/uno.css';
import MainPage from './mainpage';
import { Footer } from './Components/static/Footer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <MainPage />
    <Footer />
  </>
);

