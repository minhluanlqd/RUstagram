import React from 'react';
import './App.css';
import TopNav from './components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './components/landingpage/Home';
import SignIn from './components/landingpage/SignIn';
import SignUp from './components/landingpage/SignUp';
import Profile from './components/landingpage/Profile';
import CreatePost from './components/CardPost/CreatePost';

function App() {
  return (
    <BrowserRouter>
       <TopNav/>
       <Route exact path="/">
          <Home/>
       </Route>
       <Route path="/signin">
          <SignIn/>
       </Route>
       <Route path="/signup">
          <SignUp/>
       </Route>
       <Route path="/profile">
          <Profile/>
       </Route>
       <Route path="/create">
          <CreatePost/>
       </Route>
    </BrowserRouter>
  );
}

export default App;
