import React, { useRef } from 'react'
import styles from './WelcomeSearch.module.css'
import avatar from './img/avatar.png'
import search from './img/search.svg'
import { connect } from 'react-redux'
import { changeSearch } from '../../../../actions/actonCreators'

interface WelcomeSearchProps {
    changeSearch: (search: string | null) => void
}

function WelcomeSearch(props: WelcomeSearchProps) {
    const input = useRef<HTMLInputElement>(null)
    const inputChangeHandler = () => {
        if (input.current) {
            input.current.value
                ? props.changeSearch(input.current.value)
                : props.changeSearch(null)
        }
    }
    return (
        <div className={styles.welcomeSearchBlock}>
            <div className={styles.welcomeBlock}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.welcomeText}>
                    <h2>Добро пожаловать!</h2>
                    <p>
                        Давайте что-нибудь <br /> приготовим!
                    </p>
                </div>
            </div>
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
        </div>
    )
}

const mapDispatchToProps = {
    changeSearch,
}

export default connect(null, mapDispatchToProps)(WelcomeSearch)
