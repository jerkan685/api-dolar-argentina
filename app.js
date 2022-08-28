const app = require('express')();

const bodyParser = require('body-parser');
const helmet = require('helmet');

const PORT = process.env.PORT || 6060;

app.get('/', async (req, res) => {
    try {
    res.send('api creado por jerkan para consultar valores de dolar blue');
    } catch (error) {
     console.log(error);
     res.send(500,{msg: 'error a la peticion get principal'})
    }
});



// Configuraciones 

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json);






app.listen(PORT, () => {
    console.log('correindo server');
});