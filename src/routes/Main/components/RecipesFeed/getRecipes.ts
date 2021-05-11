import { createRecipe } from '../../../../constructors/constructors'
import { Recipe } from '../../../../model/model'

export function getRecipes(search: string | null): Promise<Recipe[] | null> {
    return new Promise(async (resolve, reject) => {
        const url = search
            ? `https://gudfud.herokuapp.com/data/get?key=${search}`
            : 'https://gudfud.herokuapp.com/data/get'
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
