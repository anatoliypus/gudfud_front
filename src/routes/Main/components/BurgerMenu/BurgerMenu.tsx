import './BurgerMenu.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function BurgerMenu() {
    const history = useHistory()
    const [BM, setBM] = useState(false)
    const showBM = () => setBM(!BM)
    
    return (
        <div className="main">
            <button className={!BM ? 'BurgerMenuIcon active' : 'BurgerMenuIcon'} onClick={showBM}></button>
            <div className={BM ? 'BurgerMenu active' : 'BurgerMenu'}>
                <div className={"SideBar"}>
                    <div className={"User"}>
                        <div className={"UserPic"}></div>
                        <div className={"UserData"}>
                            <p>UserName</p>
                            <p>mail</p>
                        </div>
                    </div>
                    <div className="PagesList">
                        <div>
                            <Link to="/">Главная</Link>
                        </div>
                        <div>
                            <Link to="/favouriteRecipes">Любимые рецепты</Link>
                        </div>
                        <div>
                            <Link to="/preferences">Предпочтения</Link>
                        </div>
                        <div>
                            <Link to="/requestHistory">История запросов</Link>
                        </div>
                        <div></div>
                        <div>
                            <Link to="/settings">Настройки</Link>
                        </div>
                        <div>
                            <Link to="/support">Служба поддержки</Link>
                        </div>
                    </div>
                    <div className={"FeedBack"}>
                        <p>
                            Нравится GudFud? Оставьте отзыв, чтобы мы могли
                            становиться еще лучше!
                        </p>
                        <a
                            className={"FeedBackButton"}
                            onClick={() => {
                                history.push('/FeedBack')
                            }}
                        >
                            Оставить отзыв
                        </a>
                    </div>
                </div>
                <div className={"DeadZone"} onClick={showBM}></div>
            </div>
        </div>
    )
}
