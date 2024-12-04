import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  calendarEntries: mongoose.Types.ObjectId[];
  choreEntries: mongoose.Types.ObjectId[];
}

const UserSchema: Schema = new Schema({
  username: { type: String, required: [true, 'Username is required'], minlength: [16, 'Name must be at least 16 characters'], maxlength: [20, 'Name cannot exceed 20 characters'] },
  email: { 
    type: String, 
    required: [true, 'Email is required'], 
    unique: true, 
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email address'], 
  },
  password: { 
    type: String, 
    required: [true, 'Password is required'], 
    minlength: [12, 'Password must be at least 8 characters'], 
  },
  calendarEntries: [{ type: Schema.Types.ObjectId, ref: 'CalendarEntry' }],
  choreEntries: [{ type: Schema.Types.ObjectId, ref: 'ChoreEntry' }],
});

const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User;
