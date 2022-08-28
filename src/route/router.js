const express = require('express');
const router = express.Router();
const {getDolarOficcer} = require('../controllers/dolarController')


/**
 * @descriptcion empezamos trayendonos los datos de  la cotizacion de los dolares mas importantes
 */

router.get('/app/dolarOficial',getDolarOficcer);





module.exports=router;