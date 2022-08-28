const express = require('express');
const router = express.Router();
const {getDolarOficcer, getDolarBlue} = require('../controllers/dolarController')


/**
 * @descriptcion empezamos trayendonos los datos de  la cotizacion de los dolares mas importantes
 */

router.get('/app/dolarOficial',getDolarOficcer);
router.get('/app/dolarBlue', getDolarBlue);




module.exports=router;