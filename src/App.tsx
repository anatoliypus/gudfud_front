import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Main } from './routes/Main/Main'
import './App.module.css'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/about">
                    <h1>About page</h1>
                </Route>
                <Route path="/faq">
                    <h1>FAQ page</h1>
                </Route>
                <Route path="/">
                    <Main></Main>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
