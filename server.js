// git remote add origin https://github.com/ProfAndersonAndrade/htmx_tail.git
// git branch -M main
// git push -u origin main
import express from 'express'
import cors from 'cors'

const app = express();
const port = 3333;

app.use(cors());

app.use(express.static("public"));
// COnseguir enviar e pegar dados na requisição num FORM
app.use(express.urlencoded({extended: true}));

app.use(express.json());

app.get('/users', (req, res)=>{
    res.send('OK FUNCIONANDO!')
});

// npm run dev
app.listen(port, ()=>{
    console.log(`Backend rodando: http://localhost:${port}`)
});


