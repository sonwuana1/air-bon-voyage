const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { Spot, Review, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/spots/:id', requireAuth, asyncHandler(async (req, res) => {

    // const allReviewsByUser = await Review.findAll({
    //     where: { user_id: req.user.id },
    //     include: [Spot, Image]
    // })

    // return res.json(allReviewsByUser)
    // console.log('REQQQQQQQQ', req.params.id)
    const allReviewsBySpot = await Review.findAll({
        where: { spot_id: req.params.id },
        include: [Spot, Image],
    })

    return res.json(allReviewsBySpot)
}))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {

    const oneReviewById = await Review.findByPk(req.params.id, {
        where: { user_id: req.user.id },
        include: [Spot, Image]
    })

    return res.json(oneReviewById)
}))


router.post('/', requireAuth, asyncHandler(async (req, res) => {

    const { rating, content, spot_id } = req.body
    const newReview = await Review.create({
        rating,
        content,
        user_id: req.user.id,
        spot_id
    })

    return res.json(newReview)
}))


router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const currentReview = await Review.findByPk(req.params.id)

    if (currentReview) {
        const { rating, content } = req.body
        await currentReview.update({
            rating,
            content,
        })
        return res.json(currentReview)
    }
}))


router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {

    const removedReview = await Review.findByPk(req.params.id)

    if (removedReview) {
        await removedReview.destroy()
        return res.json(removedReview)
    }
}))


module.exports = router;
