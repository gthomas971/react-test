import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Index from './pages/Survey';
import Error from './components/Error';
import reportWebVitals from './reportWebVitals';
import Header from './components/Header';
import Footer from './components/Footer';
import {ThemeProvider} from './utils/context/index';
import Freelances from './pages/Freelances';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Results from './pages/Results'
import {GlobalStyle} from './utils/style/GlobalStyle'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <ThemeProvider>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Header />} >
                    <Route index element={<Home />}/>
                    <Route path="survey/:questionNumber" element={<Index />}/>
                    <Route path="profils" element={<Freelances />}/>
                    <Route path="*" element = {<Error/>} />
                    <Route path="/results" element={<Results />}/>
                </Route>
            </Routes>
            <Footer />
        </ThemeProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
