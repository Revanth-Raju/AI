import { connect, disconnect } from 'mongoose';

async function connectToDataBase() {
    try {
        await connect(process.env.MONGODB_URL);
        // console.log("Connected to dataBase")
    } catch (error) {
        console.log(error);
        throw new Error("Could not connect to the dataBase");
    }
}

async function disconnectToDataBase() {
    try {
        await disconnect()
    } catch (error) {
        console.log(error)
        throw new Error("Could not disconnect to the datBase");
    }
}

export { connectToDataBase, disconnectToDataBase }