const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Spot, Review, Image } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


router.get('/', requireAuth, asyncHandler(async (req, res) => {
    const allPhotos = await Image.findAll({
        include: [User, Spot, Review],
        order: ['id']
    })

    return res.json(allPhotos)
}))


router.get('/:id', requireAuth, asyncHandler(async (req, res) => {
    const onePhoto = await Image.findByPk(req.params.id, {
        include: [User, Spot, Review]
    })

    return res.json(onePhoto)
}))


router.post('/', requireAuth, asyncHandler(async (req, res) => {

    const { link, spot_id, review_id } = req.body
    const newPhoto = await Image.create({
        link,
        user_id: req.user.id,
        spot_id,
        review_id
    })

    return res.json(newPhoto)
}))


router.put('/:id', requireAuth, asyncHandler(async (req, res) => {
    const currentPhoto = await Image.findByPk(req.params.id)

    if (currentPhoto) {
        const { link } = req.body
        await currentPhoto.update({ link })
        return res.json(currentPhoto)
    }
}))


router.delete('/:id', requireAuth, asyncHandler(async (req, res) => {

    const removedPhoto = await Image.findByPk(req.params.id)

    if (removedPhoto) {
        await removedPhoto.destroy()
        return res.json(removedPhoto)
    }
}))



module.exports = router;
