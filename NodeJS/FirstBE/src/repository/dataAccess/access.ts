const mongoose = require('mongoose');

const dbName = 'test';
const dbUri = 'mongodb://127.0.0.1:27017/' + dbName;
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
    const connectDB = async (): Promise<void> => {
        try {
            await mongoose.connect(dbUri, options);
            console.log('MongoDB connected successfully');
        } catch (error) {
            console.error('MongoDB connection failed:', error);
            process.exit(1);
        }
    };
export { connectDB };