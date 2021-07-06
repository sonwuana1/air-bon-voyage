const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Spot, Review, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const allSpots = await Spot.findAll({
        include: [Review, Image]
    })

    return res.json(allSpots)
}))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const oneSpot = await Spot.findByPk(req.params.id, {
        include: [Review, Image]
    })

    return res.json(oneSpot)
}))


module.exports = router;
