export type AppType = {
    categories: string[] | null
    user: UserType | null
    recipes: Recipe[] | null
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
    products: Product[]
    images: string[]
    title: string
}

export type Product = {
    amount: string
    name: string
}
