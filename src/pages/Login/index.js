import React , { useState } from "react";
import './login.css'
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff  } from "react-icons/hi";

var fcAPI = require('./api.js');

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false)
    const [Mensagem, setMensagem] = useState('');

    //mostrar ou esconder a senha
    const handleClick = (e) => {
        e.preventDefault()
        setShow(!show);}

    //aciona a API para cadastro de usuários
    async function CadUser() {


        var cpEmail = document.getElementById('cpEmail')
        var cpSenha = document.getElementById('cpSenha')
        console.log("cpEmail.value");
        console.log(cpEmail.value);
        console.log("cpSenha.value");
        console.log(cpSenha.value);

        const retCadUser = await fcAPI.fcIncluirUsuario(cpEmail.value, cpSenha.value );

        console.log("mensagem");
        console.log(retCadUser.clientID);
        setMensagem(retCadUser.clientID);
        setMensagem('Usuário Cadastrado');
        

    };

    return (
        <div className="login">
            <div className="login-logo">
                <img src="https://s3.sa-east-1.amazonaws.com/salaws.com/a%26plogo2.png"
                 alt="Login App" />
            </div>
            <div className="login-right">
                                <h1>L O G I N</h1>
                
                <div className="login-loginInputEmail">
                    <MdEmail/>
                    <input id="cpEmail" type="email" placeholder="Digite o seu e-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>

                </div>
                <div>  </div>
                <div className="login-loginInputPassword">
                    <MdLock/>
                    <input id="cpSenha" type={show ? "text" : "password"}
                    placeholder="Digite sua senha"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    />
                    <div className="login-eye">
                        {show ? ( <HiEye
                                   size={20}
                                   onClick={handleClick}
                                   /> ) : (<HiEyeOff
                                            size={20}
                                            onClick={handleClick}
                                            /> )}

                    </div>
                </div>
                <div>  </div>
                <button type="submit">                    
                    E N T R A R
                </button>
                <h4>Não tenho conta. Informe o e-mail e a senha e clique em Cadastrar Usuário</h4>
                <button type="submit" onClick={CadUser}>
                    C A D A S T R A R     U S U Á R I O
                </button>
                Mensagem: {Mensagem}
            </div>

        </div>
    )

}

export default Login;