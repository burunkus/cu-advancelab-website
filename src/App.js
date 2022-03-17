/**
 * @author Ebuka Okpala
 * Date: 06/11/2021
 */

import React, {Component} from 'react'
import { Route, Routes } from 'react-router';
import Home from './components/Home';
import Labs from './components/Labs';
import Publications from './components/Publications';
import About from './components/About';
import NotFound from './components/NotFound'
import Layout from './components/Layout';

class App extends Component {
    render() {
        return (
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/labs" element={<Labs />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/about" element={<About />} />
              <Route path="*" exact element={<NotFound />} />
            </Route>
          </Routes>
        );
      }
  }

export default App