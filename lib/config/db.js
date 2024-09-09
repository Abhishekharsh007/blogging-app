import mongoose from "mongoose";


// mongodb+srv://abhishekharsh3411:<db_password>@cluster0.q0njk.mongodb.net/
export const ConnectDB = async() => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('DB Connect');
}