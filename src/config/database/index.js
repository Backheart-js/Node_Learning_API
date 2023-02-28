import mongoose from 'mongoose';

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://nguyenngocbinhjvb:binhnguyen29122001@mernapp.qhqamxl.mongodb.net/mobile_shop_dev')
        console.log("Connected successfully!");

    } catch (error) {
        console.log(error);
    }
}

export default { connect }