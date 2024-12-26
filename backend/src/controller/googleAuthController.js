const { OAuth2Client } = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

const googleAuthController = {
  getGoogleAuthUrl: async (req, res) => {
    const url = client.generateAuthUrl({
      redirect_uri: process.env.GOOGLE_REDIRECT_URI,
      access_type: 'offline',
      prompt: 'consent',
      scope: [
        'https://www.googleapis.com/auth/userinfo.profile',
        'https://www.googleapis.com/auth/userinfo.email'
      ]
    });
    res.json({ url });
  },

  googleCallback: async (req, res) => {
    try {
      const code = req.query.code;
      const { tokens } = await client.getToken(code);
      const ticket = await client.verifyIdToken({
        idToken: tokens.id_token,
        audience: process.env.GOOGLE_CLIENT_ID
      });
  
      const { email, name, picture, sub: googleId } = ticket.getPayload();
  
      let user = await User.findOne({ email });
  
      if (!user) {
        user = await User.create({
          email,
          name,
          image: picture,
          isGoogleUser: true,
          googleId
        });
      } else {
        user.isGoogleUser = true;
        user.googleId = googleId;
        user.image = picture;
        await user.save();
      }
  
      const token = jwt.sign(
        { userId: user._id, email: user.email },
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
      );
  
      res.cookie('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000
      });
      // res.status(200).json({
      //   user: {
      //     userId: user._id,
      //     name: user.name,
      //     email: user.email,
      //     image: user.image
      //   },
      //   success: true
      // });
      res.redirect(`${process.env.FRONTEND}/dashboard`);

    } catch (error) {
      console.error('Google auth error:', error);
      res.status(500).json({ success: false, message: 'Authentication failed' });
    }
  }
}  

module.exports = googleAuthController;
