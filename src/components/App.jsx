import React from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from './MainPage.jsx'
import Admin from './Admin.jsx';

export default function App() {
    return(
        <div>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/admin' element={<Admin />} />
            </Routes>
        </div>
    );
};