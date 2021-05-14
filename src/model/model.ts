export type AppType = {
    categories: Category[] | null
    user: UserType | null
    search: string | null
    recipes: Recipe[]
    choosedRecipe: Recipe | null
    offset: number
    loadAmount: number
}

export type UserType = {
    name: string | null
    surname: string | null
    login: string | null
    email: string | null
    wishedRecipes: Recipe[] | null
    excludedProducts: string[] | null
}

export type Recipe = {
    categories: string[]
    steps: string[]
    cookTime: number
    products: string[]
    images: string[]
    title: string
}

export type Product = {
    amount: string
    name: string
}

export type Category = {
    name: string
    point: string
}
