import React from "react";
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Config from './pages/config';

export default () => {
    return (
        <Routes>
            <Route path='/home' element={<Home />} />

            <Route path='/config' element={<Config />} />

            <Route exact path="/sobre">
                Página sobre
            </Route>
        </Routes>
    );
}

