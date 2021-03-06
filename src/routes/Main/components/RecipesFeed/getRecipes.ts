import { createRecipe } from '../../../../constructors/constructors'
import { Recipe } from '../../../../model/model'

export function getRecipes(search: string | null): Promise<Recipe[] | null> {
    return new Promise(async (resolve, reject) => {
        const url = search
            ? `http://localhost:5000/api/get?findTitle=${search}`
            : 'http://localhost:5000/api/get'
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
                            JSON.parse(el.categories_arr_json),
                            JSON.parse(el.steps_arr_json),
                            el.cook_time,
                            JSON.parse(el.ingredients_arr_json),
                            JSON.parse(el.images_arr_json),
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
