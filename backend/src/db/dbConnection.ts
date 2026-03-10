import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://sahandhanujaya18:nR9xBKSBahjwjMGS@cluster-erp.e1dqwi1.mongodb.net/erp?retryWrites=true&w=majority");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}

export default dbConnection