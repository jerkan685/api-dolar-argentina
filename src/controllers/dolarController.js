const getInfoApi = require('../api/service-dolar');

const {formatedFecha} = require('../util/util');


/**
 * @descripcion nos traemos toda la info para ir mapeando los datos que necesitamos para consumir
 */
 const getAllInfo = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {values: data.cotiza};
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion de los dolares
 */
const getDolarOficcer = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Dolar.casa344.compra._text,
        sell: data.cotiza.Dolar.casa344.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

const getDolarBlue = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Dolar.casa380.compra._text,
        sell: data.cotiza.Dolar.casa380.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

const getDolarCCL = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Dolar.casa312.compra._text,
        sell: data.cotiza.Dolar.casa312.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

const getDolarMep = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Dolar.casa313.compra._text,
        sell: data.cotiza.Dolar.casa313.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

const getDolarTurista = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Dolar.casa406.compra._text,
        sell: data.cotiza.Dolar.casa406.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description ahora vamos a traernos los datos de la evolucion de precios de los dolares
 */

 const getEvolucionDolarOficial = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = data.cotiza.evolucion_dolar.oficial.anio
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};





module.exports = {
    getDolarOficcer,
    getDolarBlue,
    getDolarCCL,
    getDolarMep,
    getDolarTurista,
    getAllInfo
};