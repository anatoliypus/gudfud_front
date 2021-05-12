import { createRecipe } from '../../../../constructors/constructors'
import { Recipe } from '../../../../model/model'
import { configuration } from '../../../../configuration'

const path = `${configuration.server}/data/get`

export function getRecipes(
    amount: number,
    offset: number,
    search: string | null
): Promise<Recipe[] | null> {
    return new Promise(async (resolve, reject) => {
        const url = `${path}?amount=${amount}&offset=${offset}${
            search ? `&key=${search}` : ''
        }`
        console.log(url)
        let res = await fetch(url, {
            mode: 'cors',
        })
        if (res.ok) {
            const json = await res.json()
            console.log(json)
            let collection = []
            for (let el of json) {
                try {
                    collection.push(
                        createRecipe(
                            el.categories,
                            el.steps,
                            el.cook_time,
                            el.ingredients,
                            el.images,
                            el.title
                        )
                    )
                } catch {
                    console.log('error while parsing')
                }
            }
            resolve(collection)
        } else {
            console.log(res)
            reject(null)
        }
    })
}
