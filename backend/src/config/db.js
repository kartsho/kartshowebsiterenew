const mongoose=require("mongoose")

const connectionDB=async()=>{
  try{
    const connection=await mongoose.connect(process.env.MONGODB_URL,{
      autoIndex:true
    })
    console.log(`
      mongoDB is sucessfully connected
      Database: ${connection.connection.name}
      Host:${connection.connection.host}      
      `);
  }catch (error){
    console.error(`
      mongoDB connection failed
      Error:${error.message}
      `)
  }
}
module.exports=connectionDB