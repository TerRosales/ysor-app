import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IChoreEntry extends Document {
  user: mongoose.Types.ObjectId;
  description: string;
  status: 'completed' | 'incomplete';
  dueDate: Date;
}

const ChoreEntrySchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: String, required: [true, 'Description is required'], maxlength: [200, 'Description cannot exceed 200 characters'] },
  status: { type: String, enum: ['completed', 'incomplete'], default: 'incomplete' },
  dueDate: { 
    type: Date, 
    required: [true, 'Due date is required'], 
    validate: {
      validator: function (value: Date) {
        return value > new Date(); // Ensure the date is in the future
      },
      message: 'Due date must be a future date',
    },
  },
});

const ChoreEntry: Model<IChoreEntry> = mongoose.models.ChoreEntry || mongoose.model<IChoreEntry>('ChoreEntry', ChoreEntrySchema);

export default ChoreEntry;
