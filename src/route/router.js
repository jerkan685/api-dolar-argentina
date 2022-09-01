const express = require('express');
const router = express.Router();
const {getDolarOficcer, getDolarBlue,
     getDolarCCL,getDolarMep,
     getDolarTurista,getEvolucionDolarOficial, getEvolucionDolarBlue} = require('../controllers/dolarController');
const {
    getDolarBBVA,
    getDolarBrubank,
    getDolarCiudad,
    getDolarGalicia,
    getDolarHipotecario,
    getDolarItau,
    getDolarNacion,
    getDolarSantander,
    getDolarSupervielle
} = require('../controllers/bankController');


/**
 * @description empezamos trayendonos los datos de  la cotizacion de los dolares mas importantes
 */
router.get('/app/dolarOficial',getDolarOficcer);
router.get('/app/dolarBlue', getDolarBlue);
router.get('/app/dolarCCL', getDolarCCL);
router.get('/app/dolarMep', getDolarMep);
router.get('/app/dolarTurista', getDolarTurista);
router.get('/app/evolucionDolarOficial', getEvolucionDolarOficial);
router.get('/app/evolucionDolarBlue', getEvolucionDolarBlue);
/********************************************************************* */

/**
 * @description obtencion de las cotizaciones del dolar segmentado por los bancos
 */
 router.get('/app/dolarBanco/BBVA',getDolarBBVA);
 router.get('/app/dolarBanco/Brubank',getDolarBrubank);
 router.get('/app/dolarBanco/Ciudad',getDolarCiudad);
 router.get('/app/dolarBanco/Galicia',getDolarGalicia);
 router.get('/app/dolarBanco/Hipotecario',getDolarHipotecario);
 router.get('/app/dolarBanco/Itau',getDolarItau);
 router.get('/app/dolarBanco/Nacion',getDolarNacion);
 router.get('/app/dolarBanco/Santander',getDolarSantander);
 router.get('/app/dolarBanco/SuperVielle',getDolarSupervielle);


/**
 * @description obtenemos informacion del riesgo pais
 */





module.exports=router;