import React from 'react';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.main}>
        <div className={styles.content}>
            <h1>Готовить еще никогда не было так просто</h1>
            <h2>Приготовьте вкусный ужин из продуктов, которые уже есть у вас дома.</h2>
            <button className={styles.mainBtn}>
                Найти рецепт
            </button>
        </div>
    </div>
  );
}

export default App;
