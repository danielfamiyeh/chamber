import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URI as string);

export const db = mongoose.connection;
