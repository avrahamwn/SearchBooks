import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


import SearchPage from './components/SearchPage/Search-page.js';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import WishList from './components/WishList/WishList'


function App() {
    return (
        <div
            className="App"
        >
            <Router>
                <Switch>
                    <Route exact path={"/"} component={WelcomeScreen}/>
                    <Route exact path={"/search-page"} component={SearchPage} />
                    <Route exact path={"/wish-list"} component={WishList} />

                </Switch>
            </Router>
        </div>
    );
}

export default App;

