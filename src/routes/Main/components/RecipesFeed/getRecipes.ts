import { createRecipe } from '../../../../constructors/constructors'
import { Recipe } from '../../../../model/model'

export function getRecipes(search: string | null): Promise<Recipe[] | null> {
    return new Promise(async (resolve, reject) => {
        const url = search
            ? `https://gudfud.herokuapp.com/api/get?findTitle=${search}`
            : 'https://gudfud.herokuapp.com/api/get'
        let res = await fetch(url, {
            mode: 'cors',
        })
        if (res.ok) {
            const json = await res.json()
            let collection = []
            for (let el of json) {
                try {
                    collection.push(
                        createRecipe(
                            el.categories.split(','),
                            JSON.parse(el.steps),
                            el.cook_time,
                            el.ingredients.split(','),
                            el.images.split(','),
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
