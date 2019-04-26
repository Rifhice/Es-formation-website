const formationController = require('../../../controllers/FormationController');

module.exports = async (req, res) => {
    try {
        const formations = await formationController.getFormations();
        return res.status(200).json(formations)
    } catch (error) {
        logger.error(error.message)
        if (error.code) {
            return res.status(error.code).json(error.message)
        } else {
            return res.sendStatus(500);
        }
    }
}