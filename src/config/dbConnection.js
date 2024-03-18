import mongoose from "mongoose";

const connectDB = ()=>{
    const MONGO_URI = process.env.MONGO_URI;
    mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log("|--- Database Connected Successfully ---|");
    })
    .catch((error)=>{
        console.log("|--- Database Not Connected ---|");
    });
};

export default connectDB;