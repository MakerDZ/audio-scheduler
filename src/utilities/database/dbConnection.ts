import mongoose, { ConnectOptions } from 'mongoose';

const connectDB = async () => {
  try {
    const options = { useNewUrlParser: true, useUnifiedTopology: true } as ConnectOptions;
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING!, options);
    console.log('MongoDB connected.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectDB;
