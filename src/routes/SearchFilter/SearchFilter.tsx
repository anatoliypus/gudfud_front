import React, { useEffect, useRef } from 'react'
import { connect } from 'react-redux'
import { Header } from '../CommonComponents/Header/Header'
import styles from './SearchFilter.module.css'
import search from './img/search.svg'
import {
    changeSearch,
    setCategories,
} from '../../../../gudfud_front/src/actions/actionCreators'
import { createCategory } from '../../constructors/constructors'
import { AppType, Category } from '../../model/model'
import { configuration } from '../../configuration'

interface WelcomeSearchProps {
    changeSearch: (search: string | null) => void
    setCategories: (c: Category[] | null) => void
    categories: Category[] | null
}

function SearchFilter(props: WelcomeSearchProps) {
    function RadioClickHandler(str: string) {
        console.log(1)
        if (props.categories) {
            props.setCategories(
                props.categories.map((el) => {
                    if (el.title === str) {
                        return { ...el, choosed: !el.choosed }
                    }
                    return el
                })
            )
        }
    }

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(
                'https://gudfud.herokuapp.com/data/getCategories',
                {
                    method: 'GET',
                    mode: 'cors',
                }
            )
            if (res.ok) {
                const json = (await res.json()) as string[]
                const collection = json.map((el) => createCategory(el))
                props.setCategories(collection)
            } else {
                console.log('error ', res.status)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        async function getCategories() {
            if (props.categories && props.categories.length) {
                const collection = props.categories.filter((el) => {
                    return el.choosed
                })
                if (collection && collection.length) {
                    let url = `${
                        configuration.server
                    }/data/get?amount=5&offset=0&categories=${encodeURIComponent(
                        '#'
                    )}`
                    collection.forEach((el) => {
                        url += `&categories=${el.title}`
                    })
                    const res = await fetch(url, {
                        mode: 'cors',
                    })
                    if (res.ok) {
                        const json = await res.json()
                        console.log(json)
                    } else {
                        console.log(res.body)
                    }
                }
            }
        }
        getCategories()
    }, [props.categories])

    const input = useRef<HTMLInputElement>(null)
    const inputChangeHandler = () => {
        if (input.current) {
            input.current.value
                ? props.changeSearch(input.current.value)
                : props.changeSearch(null)
        }
    }

    return (
        <>
            <Header />
            <div className={styles.search}>
                <img src={search} alt="" className={styles.searchIcon} />
                <input
                    ref={input}
                    type="text"
                    className={styles.searchInput}
                    placeholder="Начните поиск..."
                    onBlur={() => inputChangeHandler()}
                />
            </div>
            <p className={styles.CategotyHeader}>Выберите категорию</p>
            <div className={styles.CategoryFilterBlock}>
                {props.categories &&
                    props.categories.map((el, index) => (
                        <div className={styles.CategoryInputBlock} key={index}>
                            <label className={styles.LabelInput}>
                                <input
                                    type="checkbox"
                                    className={styles.inputCategory}
                                    onClick={() => {
                                        console.log(2)
                                        RadioClickHandler(el.title)
                                    }}
                                ></input>
                                {el.title}
                            </label>
                        </div>
                    ))}
            </div>
            <button className={styles.SeeMore}>
                <p>Показать больше</p>
            </button>
            <div className={styles.BetweenBlock}></div>
            <div className={styles.FooterSearch}>
                <div className={styles.SeeRecipeBlock}>
                    <button className={styles.SeeRecipeButton}>
                        <p>Показать</p>
                    </button>
                </div>
                <div className={styles.ClearFilterBlock}>
                    <button className={styles.ClearFilterButton}>
                        <p>Очистить все</p>
                    </button>
                </div>
            </div>
        </>
    )
}

const mapDispatchToProps = {
    changeSearch,
    setCategories,
}

const mapStateToProps = (app: AppType) => {
    return {
        categories: app.categories,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchFilter)
