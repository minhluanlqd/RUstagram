import React, {useEffect, createContext, useReducer, useContext} from 'react';
import './App.css';
import TopNav from './components/TopNav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Home from './components/landingpage/Home';
import SignIn from './components/landingpage/SignIn';
import SignUp from './components/landingpage/SignUp';
import Profile from './components/landingpage/Profile';
import CreatePost from './components/CardPost/CreatePost';
import {reducer, initialState} from './reducers/userReducer';

export const UserContext = createContext();

const Routing = () => {
   const history = useHistory();
   const {state, dispatch} = useContext(UserContext);
   useEffect(() => {
      const user = JSON.parse(localStorage.getItem("user"));
      if(user){
         dispatch({type: "USER", payload:user});
         // history.push("/");
      }else{
         history.push("/signin");
      }
   }, []);
   return(
      <Switch>
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
      </Switch>
   );
}

function App() {

   const [state, dispatch] = useReducer(reducer, initialState);

  return (
      <UserContext.Provider value={{state, dispatch}}>
         <BrowserRouter>
            <TopNav/>
            <Routing/>
         </BrowserRouter>
      </UserContext.Provider>
  );
}

export default App;
