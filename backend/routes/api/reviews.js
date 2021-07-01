const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Booking, Spot, Review, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res) => {

    const allReviewsByUser = await Review.findAll({
        where: { user_id: req.user.id },
        include: [Spot, Image]
    })

    return res.json(allReviewsByUser)
}))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {

    const oneReviewById = await Review.findByPk(req.params.id, {
        where: { user_id: req.user.id },
        include: [Spot, Image]
    })

    return res.json(oneReviewById)
}))


module.exports = router;
