const express = require('express');
const router = express.Router();
const {getDolarOficcer, getDolarBlue, getEvolucionDolarOficial} = require('../controllers/dolarController')


/**
 * @descriptcion empezamos trayendonos los datos de  la cotizacion de los dolares mas importantes
 */

router.get('/app/dolarOficial',getDolarOficcer);
router.get('/app/dolarBlue', getDolarBlue);

//prueba
router.get('/app/evolucionDolarOficial', getEvolucionDolarOficial);




module.exports=router;