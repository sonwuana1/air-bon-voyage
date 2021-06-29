const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


const router = express.Router();


const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('first_name')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a First Name with at least 4 characters.'),
  check('first_name')
    .not()
    .isEmail()
    .withMessage('First Name cannot be an email.'),
  check('last_name')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a Last Name with at least 4 characters.'),
  check('last_name')
    .not()
    .isEmail()
    .withMessage('Last Name cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

// Sign up
router.post('/', validateSignup, asyncHandler(async (req, res) => {
      const { email, password, first_name, last_name } = req.body;
      const user = await User.signup({ email, first_name, last_name, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);



module.exports = router;
