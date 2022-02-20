import styled from "styled-components";

export const Body = styled.div`
    height: 80vh;
    width: 100wh;
    display: flex;
    background: #1c1c1c;
    color: blue;

    p {
        color: gray;
        height: 200px;
        font-size: 1em;
        position: relative;
        top: 140px;
        left: 120px;
        transition: all ease  0.2s;

        strong {
            color: white;
        }

        &:hover {
            color: white;
            transition: all ease  0.2s;
        }
    }    

    h1 {
        color: gray;
        display: inline-block;
        position: fixed;
        font-family: fantasy;
        font-weight: bold;
        transition: all ease  0.2s;

        &:hover {
            color: white;
            transition: all ease  0.2s;
        }
    }

    
    
    ul {

        margin: 0px;
        padding: 5px;
        display: inline;
        position: fixed;
        right: 10px;

        li {
            display: inline-block;
            position: relative;
            transition: all ease  0.2s;

            &:hover {
                top: -6px;
                transition: all ease  0.2s;
            }
       }

    }

    img {
        width: 35px;
        height: 35px;
        margin: 10px 5px;
        border: 1px solid black;
        border-radius: 20px;
        background-color: gray;
        box-shadow: 3px 3px 3px #4F4F4F;
        transition: all ease  0.2s;
        fit: cover;
        
        &:hover {

            background-color: white;
            box-shadow: 5px 5px 5px #4F4F4F;
            transition: all ease  0.2s;
        }
    }

`;

export const Rodape = styled.div`
    height: 20vh;
    width: 100wh;
    background: #000000;
    color: grey;
    padding: 0px;
    margin: 0px;

    h3 {
        color: white;
        display: inline-block;
        position: relative;
        top: -80px;
        left: 35%;
        padding: 2px;
        background-color: #1c1c1c;

        border-radius: 5px;
        border: 1px solid white;
        box-shadow: 3px 3px 3px gray;
        transition: all ease  0.2s;

       
    }

    ul {
        position: relative;
        left: 35%;
        display: inline-block;

        li {
            color: gray;
        }

        p {
            color: white;
            display: inline-block;
            margin: 0px;
        }

    }

    &:hover {
        h3 {
            background-color: #363636;
            box-shadow: 5px 5px 5px gray;
            transition: all ease  0.2s;
        }
    }

    

    a {
        padding: 5px;
        color: white;
        text-decoration: none;
    }

`;

