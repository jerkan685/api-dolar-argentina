const getInfoApi = require('../api/service-dolar');

const {formatedFecha} = require('../util/util');
/**
 * @description obtener los datos del dolar ofical
 */
const getDolarOficcer = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        fecha: formatedFecha(),
        compra: data.cotiza.Dolar.casa344.compra._text,
        venta: data.cotiza.Dolar.casa344.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};


module.exports = {
    getDolarOficcer
};