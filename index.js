const app = require("./app");
const mongoose = require("mongoose")
require('dotenv').config();

const uri = process.env.DB;
mongoose.connect(uri,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:true,
}).then(()=>{
    console.log('Database connected');
}).catch((err)=>{
    console.log("Failed to connnect database",err);
})

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`); 
})