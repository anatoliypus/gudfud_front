import { Recipe, UserType, Product, AppType } from '../model/model'

export function createUser(
    login: string | null = null,
    email: string | null = null,
    name: string | null = null,
    surname: string | null = null
): UserType {
    return {
        name,
        login,
        email,
        surname,
        wishedRecipes: null,
        excludedProducts: null,
    }
}

export function createRecipe(
    categories: string[],
    steps: string[],
    cookTime: number,
    products: Product[],
    images: string[],
    title: string
): Recipe {
    return {
        steps,
        cookTime,
        products,
        images,
        title,
        categories,
    }
}

export function createProduct(name: string, amount: string): Product {
    return {
        name,
        amount,
    }
}

export function createApp(): AppType {
    return {
        categories: null,
        user: createUser(),
        recipes: [],
    }
}
