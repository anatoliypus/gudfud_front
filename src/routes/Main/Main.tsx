import React from 'react'
import { Header } from './components/Header/Header'
import RecipesFeed from './components/RecipesFeed/RecipesFeed'
import WelcomeSearch from './components/WelcomeSearch/WelcomeSearch'
import { RecipeFeedCard } from './components/RecipesCard/RecipeFeedCart'

export function Main() {
    return (
        <div>
            <Header />
            <WelcomeSearch />
            <RecipesFeed />
            <RecipeFeedCard />
        </div>
    )
}
