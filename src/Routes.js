import React from "react";
import { Routes, Route, Router } from 'react-router-dom/Route';

import Home from './pages/Home';
import Config from './pages/config';

export default () => {
    return (
        <Router>
            <Routes>
                <Route path='/home' element={<Home />} />

                <Route path='/config' element={<Config />} />
                
                <Route exact path="/sobre">
                    Página sobre
                </Route>
            </Routes>
        </Router>
    );
}

