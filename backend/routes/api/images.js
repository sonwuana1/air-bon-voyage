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



module.exports = router;
