const passport = require("passport");
const GoogleProvider = require("./Strategies/GoogleStrategy.js");

passport.use(GoogleProvider); // Use Google OAuth strategy

module.exports = passport;
