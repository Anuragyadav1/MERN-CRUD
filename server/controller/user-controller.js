
const User = require('../model/userSchema')

exports.addUser = async (req,res)=>{

    // console.log(req.body)
    // console.log("After req.body")
      // Assuming req.body contains the data from the frontend
      const userData = req.body;

        // Create a new User instance using the Mongoose model
        //The purpose of creating this instance is likely to prepare the data for saving it to the MongoDB database. After creating the instance, the code proceeds to save it using await newUser.save()
        //In summary, this line creates a new user object using the User model and the data received from the frontend
      const newUser = new User(userData);
       // printing with id created by mongoose
      // console.log(newUser) 

    try{
    // Save the user to the database
        await newUser.save() 
        // Respond with the saved user object or any other response you prefer
        res.status(201).json(newUser);
      }

   catch(err){
       console.log(err)
   }
}


// exports.deleteUser = async (req, res) => {
//     const userId = req.params.id;
  
//     try {
//       // Find the user by ID and remove it
//       const deletedUser = await User.findByIdAndDelete(userId);
  
//       if (!deletedUser) {
//         return res.status(404).json({ message: 'User not found' });
//       }
  
//       res.status(200).json({ message: 'User deleted successfully', user: deletedUser });
//     } catch (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };



exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.getUser = async (req, res) => {
  const userId = req.params.id;
  try {
      const user = await User.findById(userId);
      // console.log(user)
      res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.editUser = async (req,res)=>{
    const user = req.body;
    const editUser = new User(user);
    
  try{
      await User.updateOne({_id:req.params.id},editUser)
      res.status(201).json(editUser);
}
catch(err){
   console.log(err)
}
}


exports.deleteUser = async (req,res)=>{
  const userId = req.params.id;

  try{
    await User.findByIdAndDelete(userId)
    res.status(200).json({message:'User Deleted Successfully'})
}
catch(err){
 console.log(err)
}
}

