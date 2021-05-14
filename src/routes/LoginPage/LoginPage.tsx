import './LoginPage.css'
import {Link} from 'react-router-dom'
import { useRef } from 'react'

function LoginPage() {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    return (
        <>
        <div className='main'>
            <div className='headerBlock'>
                <h1>GoodFood</h1>
                <h2>Вход</h2>
            </div>
            <div className='formCover'>
                <form className={'form'}>
                    <div className={'emailBlock'}>
                        <label className={'inputDecor'}>
                            <div className={'inputDecorLabel'}>Адрес эл.почты</div>
                            <input className={'formInput'} type="text" name="email" ref={email} placeholder="Введите адрес эл.почты"/>
                        </label>
                    </div>
                    <div className={"passwordBlock"}>
                        <label className={'inputDecor'}>
                            <div className={'inputDecorLabel'}>Пароль</div>
                            <input className={'formInput'} type="text" name="password" ref={password} placeholder="Введите пароль"/>                          
                        </label>    
                    </div>
                    <div className={'passForgot'}>
                        <Link to="/forgotPassword" className={'text-link-fp'}>
                            Забыли пароль?
                        </Link>
                    </div>
                    <div className={'rememberMe'}>
                        <p><input type="checkbox" name="check"/>Запомнить меня</p>
                    </div>
                    <div className={'submitButton'}>
                        <input type="submit" value="Войти"/>
                    </div>
                </form>
            </div>
            <div className={'createAccount'}>
                <p>Первый раз здесь?</p>
                <Link to="/createAccount" className={'text-link'}>
                    Создать аккаунт
                </Link>
            </div>
        </div>
    </>
    )
}

export default LoginPage