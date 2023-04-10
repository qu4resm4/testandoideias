// Quaresma
import express from "express";
import rota from "../views/consoleInput.js"
const app = express()

const nomeRota = (rota === "/funcionario") ? "/funcionario" : null ;

class funcionario {
    static configureRoute() {
        app.get(`${nomeRota}}`, (req, res) => {
            
        });

        app.post(`${nomeRota}}`, (req, res) => {
            const { funcionario, idade, cargo, CPF} = req.body
        
            console.log(funcionario, idade, cargo, CPF)
            res.send("ROTA COM POST")
        })
    };
};

export default funcionario;