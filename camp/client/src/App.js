import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import PostDetails from './components/PostDetails/PostDetails';
import ItemDetails from './components/ItemDetails/ItemDetails';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import CreatorOrTagOP from './components/PostDetails/CreatorOrTagOP'
import CreatorOrTagOI from './components/ItemDetails/CreatorOrTagOI'
import Items from './components/Items/Items';
import Fpage from './components/Fpage/Fpage'
import CampCenter from './components/CampCenter/CampCenter';
import Centers from './components/S/Centers';
import Contact from './components/contact/Contact';

const App = () => {
  const user = JSON.parse(localStorage.getItem('profile'));

  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Navbar />
        <Switch>
          <Route path="/" exact component={() => <Redirect to="/posts" />} />
          <Route path="/posts" exact component={Home} />
          <Route path="/items" exact component={Items} />
          <Route path="/posts/search" exact component={Home} />
          <Route path="/items/search" exact component={Items} />
          <Route path="/posts/:id" exact component={PostDetails} />
          <Route path="/items/:id" exact component={ItemDetails} />
          <Route path={['/creators/:name', '/tags/:name']} component={CreatorOrTagOP} />
          <Route path={['/creator/:name', '/tags/:name']} component={CreatorOrTagOI} />
          <Route path="/auth" exact component={() => (!user ? <Auth /> : <Redirect to="/posts" />)} />
          <Route path="/fpage" exact component={Fpage} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/c" exact component={Centers} />

        </Switch>
      </Container>
    </BrowserRouter>
  );
};

export default App;