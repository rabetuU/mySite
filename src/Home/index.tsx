import React, { useState } from "react";
import PlayerVideo from "../components/PlayerVideo";
import "./styles";
import {
    Body,
    Rodape
} from "./styles";


const Site = () => {

    const perfil_linkedin = "https://www.linkedin.com/in/francisco-barreto-363644221/"
    const icon_linkedin = "https://www.iconpacks.net/icons/1/free-linkedin-icon-112-thumb.png"
    const perfil_github = "https://github.com/rabetuU"
    const icon_github = "http://cdn.onlinewebfonts.com/svg/img_326384.png"
    

    return (

        <div style={{margin: "0px", padding: "0px"}}>

            <Body>

                <h1 id="Francisco" style={{left: "15px", top: "-20px",}}>Francisco</h1>
                <h1 id="Barreto" style={{left: "90px", top: "10px"}}>Barreto</h1>

                <h1 style={{height: "20px",position: "relative",left: "90px", top: "100px", fontSize: "3em"}}>' '</h1>
                <p>
                   <strong style={{fontSize: "1.5em"}}>Olá</strong>, me chamo Francisco Barreto, sou um estudante de Eng. de<br/>
                   Computação pelo <strong>IFCE</strong>. Em busca de oportunidade no mercado de trabalho,<br/>
                   interessado em vagas de estágio em amplas áreas de<br/>
                   desenvolvimento web/mobile.<br/>
                   Durante a minha cadeira de <strong>POO</strong> desenvolvi, juntamente de minha equipe,<br/>
                   o aplicativo <strong>BLANCH</strong>, feito
                   em Flutter/Dart e com o uso do Banco<br/>
                   de Dados FireBase... <strong>(Mais demonstrações no vídeo ao lado)...</strong><br/>
                   Procuro experiência para que consiga atingir minha meta,<br/>
                   que é ser um desenvolvedor <strong>FullStack!</strong>
                </p>
                <h1 style={{height: "20px",position: "relative",left: "130px", top: "350px", fontSize: "3em"}}>' '</h1>

                <h1 style={{height: "20px", position: "relative",right: "-300px", top: "130px", fontSize: "2em"}}>Blanch: </h1>

                <ul>
                    <li><a href={perfil_linkedin}><img src={icon_linkedin}/></a></li>
                    <li><a href={perfil_github}><img src={icon_github}/></a></li>
                </ul>


                <PlayerVideo/>
                

            </Body>
            <Rodape>
                <h3>Contatos : </h3>

                <ul>
                    <li>Email:<a href="https://mail.google.com/mail/u/2/#inbox">fcobarretocarv@gmail.com</a></li>
                    <li>Telefone: <p>(85) 99256-8852</p></li>
                    <li>Instagram:<a href="https://www.instagram.com/barretont_/">@barretont_</a></li>
                    <li>Github: <a href="https://github.com/rabetuU">Francisco Barreto</a></li>
                    <li>Linkedin: <a href="https://www.linkedin.com/in/francisco-barreto-363644221/">Francisco Barreto</a></li>
                </ul>
                
            </Rodape>

        </div>



    );
}

export default Site