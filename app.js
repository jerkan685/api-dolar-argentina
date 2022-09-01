const app = require('express')();
const cors = require('cors')
const bodyParser = require('body-parser');
const helmet = require('helmet');
require('dotenv').config();
const router = require('./src/route/router');

const PORT = process.env.PORT || 6065;


app.get('/', async (req, resp) => {
    try {
    resp.send('api creado por jerkan para consultar valores de dolar blue');
    } catch (error) {
     console.log(error);
     resp.status(500).send({msgError: 'error a la peticion get principal'});
    }
});



// Configuraciones 

app.use(helmet());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use('/' ,router);
// falta empezar a crear los routes que se van crear a partir del consumo 








app.listen(PORT, () => {
    console.log(`corriendo server en puerto ${PORT}`);
});