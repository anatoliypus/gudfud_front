import './BurgerMenu.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'

export default function BurgerMenu() {
    const history = useHistory()
    const [BM, setBM] = useState(false)
    const showBM = () => setBM(!BM)

    return (
        <div className={BM ? 'main active' : 'main'}>
            <button
                className={!BM ? 'BurgerMenuIcon active' : 'BurgerMenuIcon'}
                onClick={showBM}
            ></button>
            <div className={BM ? 'BurgerMenu active' : 'BurgerMenu'}>
                <div className={'SideBar'}>
                    <div className={'User'}>
                        <div className={'UserPic'}></div>
                        <div className={'UserData'}>
                            <p>UserName</p>
                            <p>mail</p>
                        </div>
                    </div>
                    <div className="PagesList">
                        <div>
                            <Link className="text-link" to="/" onClick={showBM}>
                                Главная
                            </Link>
                        </div>
                        <div>
                            <Link className="text-link" to="/favouriteRecipes" onClick={showBM}>
                                Любимые рецепты
                            </Link>
                        </div>
                        <div>
                            <Link className="text-link" to="/preferences" onClick={showBM}>
                                Предпочтения
                            </Link>
                        </div>
                        <div>
                            <Link className="text-link" to="/requestHistory" onClick={showBM}>
                                История запросов
                            </Link>
                        </div>
                        <div id="space"></div>
                        <div>
                            <Link className="text-link" to="/settings" onClick={showBM}>
                                Настройки
                            </Link>
                        </div>
                        <div>
                            <Link className="text-link" to="/support" onClick={showBM}>
                                Служба поддержки
                            </Link>
                        </div>
                    </div>
                    <div className={'FeedBack'}>
                        <p>
                            Нравится GudFud? Оставьте отзыв, чтобы мы могли
                            становиться еще лучше!
                        </p>
                        <a
                            className={'FeedBackButton'}
                            onClick={() => {
                                history.push('/FeedBack')
                            }}
                        >
                            Оставить отзыв
                        </a>
                    </div>
                </div>
                <div className={'DeadZone'} onClick={showBM}></div>
            </div>
        </div>
    )
}
