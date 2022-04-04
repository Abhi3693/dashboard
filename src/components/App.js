import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import Articles from './Articles';
import Article from './Article';
import Books from './Books';
import People from './People';
import Help from './Help';
import NotFound from './NotFound';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Header />
        <div className='container flex'>
          <Sidebar />
          <div className='main'>
            <Routes>
              <Route path='/' exact element={<Home />} />
              <Route path='/articles' element={<Articles />} />
              <Route path='/article/:slug' element={<Article />} />
              <Route path='/books' element={<Books />} />
              <Route path='/help' element={<Help />} />
              <Route path='/people' element={<People />} />
              <Route path='/*' element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
