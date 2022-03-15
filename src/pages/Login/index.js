import React from "react";
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import { AreaLogin } from './styled';
import { BtnDefaultIcons, BtnDefault } from '../../components/styled';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

export default () => {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/register">
                    <AreaLogin>
                        <h1 className="organize">
                            <Link to="/"><ArrowBackIosIcon /></Link>
                            Crie sua conta</h1>
                        <p>Crie sua conta, é grátis!</p>

                        <form>
                            <div className="form--imput">
                                <label>Nome</label>
                                <input type="text" />
                            </div>

                            <div className="form--imput">
                                <label>Sobrenome</label>
                                <input type="text" />
                            </div>

                            <div className="form--imput">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Comece agora</BtnDefault>

                            <div className="footerLogin">
                                Já tem uma conta?
                                <Link to="/"> Fazer Login</Link>
                            </div>
                        </form>

                    </AreaLogin>
                </Route>
                <Route exact path="*">
                    <AreaLogin>
                        <h1>Faça o login em sua conta</h1>

                        <BtnDefaultIcons>
                            <FacebookIcon />
                            <div className="center">Faça login usando o Facebook</div>
                        </BtnDefaultIcons>

                        <BtnDefaultIcons>
                            <GoogleIcon />
                            <div className="center">Faça login usando o Google</div>
                        </BtnDefaultIcons>

                        <p>OU</p>

                        <form>
                            <div className="form--imput">
                                <label>E-mail</label>
                                <input type="email" />
                            </div>

                            <div className="form--imput">
                                <label>Senha</label>
                                <input type="password" />
                            </div>

                            <BtnDefault>Entrar</BtnDefault>

                            <div className="footerLogin">
                                Não tem uma conta?
                                <Link to="/register"> Registre-se</Link>
                            </div>
                        </form>
                    </AreaLogin>
                </Route>
            </Switch>

        </BrowserRouter>
    );
}