const castDato = require('xml-js');
const axios = require('axios');
const UrlService = require('./api-name-consumer');

const getInfoApi = async (req, res) => {

    /**
     * @description obtenemos los datos principales de la info del dolar
     */

    try {
       const infoDolar = await axios.get(UrlService);
       const json = castDato.xml2json(infoDolar.data, {compact: true, spaces: 4});
       const parseDato = JSON.parse(json);
       return parseDato 
    } catch (error) {
        res.status(500).send({msgError: error})
    }
};

module.exports=getInfoApi;