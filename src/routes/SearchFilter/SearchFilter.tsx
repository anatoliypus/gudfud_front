import React, { useRef } from 'react'
import { AppType} from '../../model/model'
import { connect } from 'react-redux'
import { Header } from '../CommonComponents/Header/Header'
import { useHistory } from 'react-router-dom'
import styles from './SearchFilter.module.css'
import search from './img/search.svg'
import WelcomeSearch from '../Main/components/WelcomeSearch/WelcomeSearch'
import { changeSearch } from '../../../../gudfud_front/src/actions/actionCreators'

interface WelcomeSearchProps {
    changeSearch: (search: string | null) => void
}

function SearchFilter(props: WelcomeSearchProps) {

    const history = useHistory()


    const input = useRef<HTMLInputElement>(null)
    const inputChangeHandler = () => {
        if (input.current) {
            input.current.value
                ? props.changeSearch(input.current.value)
                : props.changeSearch(null)
        }
    }

     const logo = fetch('https://gudfud.herokuapp.com/data/getCategories', {
        method: 'GET',
        mode : 'cors'
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
    }); 

    console.log(logo);

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
                <div className={styles.CategoryFilterBlock}>
                    <p>Выберите категорию</p>
                    <button className={styles.SeeMore}>
                        <p>Показать больше</p>
                    </button>
                    <div className={styles.BetweenBlock}>
                    </div>
                </div>
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
}

export default connect(null, mapDispatchToProps)(SearchFilter)

