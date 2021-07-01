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


router.post('/', requireAuth, asyncHandler(async (req, res) => {
    // console.log('USERRRRRR', req.user.toJSON())

    const { start_date, end_date, spot_id} = req.body
    const newBooking = await Booking.create({
        start_date,
        end_date,
        user_id: req.user.id,
        spot_id
    })

    return res.json(newBooking)
}))


router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const currentBooking = await Booking.findByPk(req.params.id)

    if (currentBooking) {
        const { start_date, end_date} = req.body
        await currentBooking.update({
            start_date,
            end_date,
        })
        return res.json(currentBooking)
    }
}))


router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {

    const removedBooking = await Booking.findByPk(req.params.id)

    if (removedBooking) {
        await removedBooking.destroy()
        return res.json(removedBooking)
    }
}))


module.exports = router;
