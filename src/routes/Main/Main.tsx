import React from 'react'
import { Header } from '../CommonComponents/Header/Header'
import RecipesFeed from './components/RecipesFeed/RecipesFeed'
import WelcomeSearch from './components/WelcomeSearch/WelcomeSearch'

export function Main() {
    return (
        <div>
            <Header />
            <WelcomeSearch />
            <RecipesFeed />
        </div>
    )
}
