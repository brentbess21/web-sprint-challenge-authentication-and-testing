const User = require('./../users/users-model');


const usernameTaken = async (req, res, next) => {
    try {
        const user = await User.findBy({username: req.body.username})
        if(user) {
          next({
            status: 401,
            message: 'username taken'
          })
        } else {
          req.user = user
          next()
        }
      } catch(err) {
        next(err)
      }
}


module.exports = {
    usernameTaken
}