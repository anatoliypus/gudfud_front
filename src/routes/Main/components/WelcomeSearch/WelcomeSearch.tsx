import React from 'react'
import styles from './WelcomeSearch.module.css'
import avatar from './img/avatar.png'
import search from './img/search.svg'

export function WelcomeSearch() {
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
                    type="text"
                    className={styles.searchInput}
                    placeholder="Начните поиск..."
                />
            </div>
        </div>
    )
}
