const Formation = require("../models/Formation");
const throwError = require("../helper/RequestHelper").throwError;

const getFormations = async () => {
    try {
        const formations = await Formation.find({})
        return formations
    } catch (error) {
        logger.error(error.message)
        throw error
    }
}


module.exports = {
    getFormations,
};