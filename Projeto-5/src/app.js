import express from "express";
import funcionario from "./controllers/funcionario.js"

const app = express();

const routes = () => {
    funcionario.configureRoute()
} ;

export default routes;