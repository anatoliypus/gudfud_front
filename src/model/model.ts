export type AppType = {
    categories: string[] | null
    user: UserType | null
    search: string | null
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
