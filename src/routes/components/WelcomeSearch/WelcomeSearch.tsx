import React from 'react'
import styles from './WelcomeSearch.module.css'
import avatar from './img/avatar.png'

export function WelcomeSearch() {
    return (
        <div className={styles.welcomeSearchBlock}>
            <div className={styles.welcomeBlock}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.welcomeText}>
                    <h2>Добро пожаловать!</h2>
                    <p>Давайте что-нибудь приготовим!</p>
                </div>
            </div>
            <input type="text" className="search" />
        </div>
    )
}
