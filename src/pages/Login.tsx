import LoginContainer from "./Login.style";
import Input from "../components/Input/index";
import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);

    const onChangeEmail = (e: any) => setEmail(e.target.value);
    const onChangePassword = (e: any) => setPassword(e.target.value);
    
    const login = (e: any) => {
        e.preventDefault();
        setRedirect(true);
    }

    return (
        <>
            {
                redirect ? 
                    <Redirect to="home" />
                :
                <LoginContainer>
                    <form className="login-form" onSubmit={login}>
                        <img className="logo" src="/images/logo.jpg" alt="dwinfotec" />
                        <p className="welcome-text">Olá, seja bem vindo, para começar digite seu login e senha</p>

                        <div className="container--input">
                            <label htmlFor="email">E-mail</label>
                            <Input id="email" name="email" value={email} onChange={onChangeEmail} />
                        </div>

                        <div className="container--input">
                            <label htmlFor="password">Senha</label>
                            <Input id="password" name="password" type="password" value={password} onChange={onChangePassword} />
                        </div>
                        
                        <button className="btn">Login</button>
                    </form>
                </LoginContainer>
            }
        </>
    )
}

export default Login;