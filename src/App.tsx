import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main } from './routes/Main/Main'
import './App.module.css'
import RecipeCard from './routes/RecipeCard/RecipeCard'
import LoginPage from './routes/LoginPage/LoginPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/LoginPage">
                    <LoginPage/>
                </Route>
                <Route path="/RecipeCard">
                    <RecipeCard />
                </Route>
                <Route path="/">
                    <Main></Main>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
