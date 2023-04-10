import routes from './app.js'
import express from 'express';

const app = express();
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Running in http://localhost:${PORT}`);
})


routes()