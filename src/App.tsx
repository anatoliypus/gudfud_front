import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/faq">FAQ</Link>
            </nav>
            <Switch>
                <Route path="/about">
                    <h1>About page</h1>
                </Route>
                <Route path="/faq">
                    <h1>FAQ page</h1>
                </Route>
                <Route path="/">
                    <h1>Home page</h1>
                </Route>
            </Switch>
        </Router>
    )
}

export default App
