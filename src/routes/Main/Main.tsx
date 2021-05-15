import React from 'react'
import { Header } from '../CommonComponents/Header/Header'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
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
