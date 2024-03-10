import mongoose from "mongoose"

const dbconnection = async(req, res, next) => {
   try {
     const connection =  await mongoose.connect(process.env.MONGO_URI);
     if(connection){
        console.log("Database connection successful")
     }
   } catch (error) {
      console.log(`Failed to connect to mongo_db database ${error}`)
   }
}


export default dbconnection