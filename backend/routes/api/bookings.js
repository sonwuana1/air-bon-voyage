const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Booking, Spot, Review, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    // console.log('USERRRRRR', req.user.toJSON())

    const allBookingsByUser = await Booking.findAll({
        where: { user_id: req.user.id },
        include: [Spot]
    })

    return res.json(allBookingsByUser)
}))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {

    const oneBookingsByUser = await Booking.findByPk(req.params.id, {
        // where: { user_id: req.user.id },
        include: [Spot]
    })

    return res.json(oneBookingsByUser)
}))


module.exports = router;
