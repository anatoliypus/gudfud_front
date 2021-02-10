import styles from './Main.module.css'

export default function Main() {
    return (
        <div className={styles.main}>
            <div className={styles.content}>
                <h1>Готовить еще никогда не было так просто</h1>
                <h2>
                    Приготовьте вкусный ужин из продуктов, которые уже есть у
                    вас дома.
                </h2>
                <button className={styles.mainBtn}>Найти рецепт</button>
            </div>
        </div>
    )
}
