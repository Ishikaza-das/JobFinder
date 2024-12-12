const { oauth2client } = require("../utils/googleConfig");
const axios = require("axios");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const googleAuth = async (req, res) => {
  try {
    const { code } = req.query;
    const googleRes = await oauth2client.getToken(code);
    oauth2client.setCredentials(googleRes.tokens);

    const userRes = await axios.get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
    );
    const { email, name, picture } = userRes.data;
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, name, image: picture,isGoogleUser: true,
        googleId: userRes.data.sub });
    }
    const { _id } = user;
    const token = jwt.sign({ _id, email }, process.env.SECRET_KEY,{expiresIn:"24h"});
    return res.status(200).json({
        message: 'Success',
        token,
        user
    })
  } catch (error) {
    // console.log(error);
    res.status(500).json({
        message: 'Internal Server Error'
    })
  }
};

module.exports = { googleAuth };
