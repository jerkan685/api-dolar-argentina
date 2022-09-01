const getInfoApi = require('../api/service-dolar');

const {formatedFecha} = require('../util/util');


/**
 * @description obtener cotizacion del dolar del banco BBVA 
 */
 const getDolarBBVA = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa336.compra._text,
        sell: data.cotiza.Capital_Federal.casa336.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};


/**
 * @description obtener cotizacion del dolar del banco Hipotecario;
 */
 const getDolarHipotecario = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa217.compra._text,
        sell: data.cotiza.Capital_Federal.casa217.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del dolar del banco Galicia;
 */
 const getDolarGalicia = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa342.compra._text,
        sell: data.cotiza.Capital_Federal.casa342.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del dolar del banco Santander;
 */
 const getDolarSantander = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa401.compra._text,
        sell: data.cotiza.Capital_Federal.casa401.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del dolar del banco Ciudad;
 */
 const getDolarCiudad = async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa402.compra._text,
        sell: data.cotiza.Capital_Federal.casa402.venta._text,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del dolar del banco SuperVielle;
 */
 const getDolarSupervielle= async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa403.compra._text,
        sell: data.cotiza.Capital_Federal.casa403.venta._textt,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del dolar de la billetera brubank;
 */
 const getDolarBrubank= async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa413.compra._text,
        sell: data.cotiza.Capital_Federal.casa413.venta._textt,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del Banco nacion ;
 */

const getDolarNacion= async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa6.compra._text,
        sell: data.cotiza.Capital_Federal.casa6.venta._textt,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};

/**
 * @description obtener cotizacion del Banco Itau ;
 */

 const getDolarItau= async (req, resp) => {
    try {
     const data = await getInfoApi();
     const values = {
        dateConsult: formatedFecha(),
        buy: data.cotiza.Capital_Federal.casa156.compra._text,
        sell: data.cotiza.Capital_Federal.casa156.venta._textt,
     };
     resp.send(values);
    } catch (error) {
     console.log(error);
     resp.status(500).send({mgsError: error});
    }
};


module.exports={
    getDolarBBVA,
    getDolarBrubank,
    getDolarCiudad,
    getDolarGalicia,
    getDolarHipotecario,
    getDolarItau,
    getDolarNacion,
    getDolarSantander,
    getDolarSupervielle
}

