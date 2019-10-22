const User          = require('../modals/user');

var createUser = function (req, res) {
    var user = new User(req.body);
    user.profilePicture=req.file.path;
   console.log(user)
    user.save(function (err) {
      if (err) {
        return res.status(400).json(err);
      } else {
        return res.status(200).json(user);
      }
    });
  };
  
  var updateUser = function (req, res) {
    User.findByIdAndUpdate(req.params.userId, req.body, {new: true}, function (err, user) {
      if (err) {
       return res.status(400).json(err)
      } else {
       return res.json(user);
      }
    });
  };
  
  var deleteUser = function (req, res) {
    User.deleteOne({_id:req.params.userId},function (err) {
      if (err) {
        return res.status(400).json(err)
      } else {
        return res.json(req.user);
      }
    });
  };
  
  var getAllUsers = function (req, res) {
    User.find(function (err, users) {
      if (err) {
        return res.status(400).json(err)
      } else {
        return res.json(users);
      }
    });
  };
  
  
  var getByIdUser = function (req, res) {
    User.findOne({_id: req.params.userId}, function (err, user) {
      if (err) {
        return res.status(400).json(err)
      } else {
        return res.json(user)
      }
    });
  };


 const uploadFiles=(req,res)=>{


 } 

module.exports={
    getAllUsers,
    getByIdUser,
    deleteUser,
    updateUser,
    createUser,
    uploadFiles
}