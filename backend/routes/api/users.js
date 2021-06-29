const express = require('express')
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


const router = express.Router();


// Sign up
router.post('/', asyncHandler(async (req, res) => {
      const { email, password, first_name, last_name } = req.body;
      const user = await User.signup({ email, first_name, last_name, password });

      await setTokenCookie(res, user);

      return res.json({
        user,
      });
    }),
);



module.exports = router;
