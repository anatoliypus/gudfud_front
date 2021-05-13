import React from 'react'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import { Header } from './components/Header/Header'
import RecipesFeed from './components/RecipesFeed/RecipesFeed'
import WelcomeSearch from './components/WelcomeSearch/WelcomeSearch'

export function Main() {
    return (
        <div>
            <BurgerMenu />
            <Header />
            <WelcomeSearch />
            <RecipesFeed />
        </div>
    )
}
