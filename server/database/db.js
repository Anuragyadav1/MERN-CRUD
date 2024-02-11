
const mongoose = require('mongoose')

exports.Connection = async ()=>{
    // const URL = `mongodb+srv://AnuragYadav:nvUFkq2lyWWj7uy0@cluster0.ewdpijo.mongodb.net/MernCrud`

    try{
    //    await mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true })
    //    console.log('Database connected successfully')
      await mongoose.connect('mongodb://127.0.0.1:27017/MernCrud')
     .then(() => console.log('Database Connected!'));
    }
    catch(err){
        console.log("Error while connecting with database " ,err)
    }
}

// for ES6 imports
// export default Connection


// for  Node.js `require()`
// module.exports = Connection
