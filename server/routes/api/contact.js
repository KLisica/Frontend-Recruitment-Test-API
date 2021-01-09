const express = require('express')
const router = express.Router()
const { body, validationResult } = require('express-validator');

router.post(
  '/',

  // Email validation rule.
  body('email')
    .isEmail()
    .withMessage('Please provide a valid email address.'),

  // Message validation rule.
  body('message')
    .isLength({ min: 30 })
    .withMessage('Your message should be at least 30 characters long.'),

  // Handle request
  (req, res) => {

    // Check for error messages.
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // On success.
    res.status(200).send('Your message has been sent!')
})

module.exports = router