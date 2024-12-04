import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ICalendarEntry extends Document {
  user: mongoose.Types.ObjectId;
  title: string;
  date: Date;
  time: string;
  notes?: string;
}

const CalendarEntrySchema: Schema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  title: { type: String, required: [true, 'Title is required'], minlength: [3, 'Title must be at least 3 characters'], maxlength: [100, 'Title cannot exceed 100 characters'] },
  date: { type: Date, required: [true, 'Date is required'] },
  time: { type: String, required: [true, 'Time is required'], match: [/^\d{2}:\d{2}$/, 'Time must be in HH:MM format'] },
  notes: { type: String, maxlength: [500, 'Notes cannot exceed 500 characters'] },
});

const CalendarEntry: Model<ICalendarEntry> = mongoose.models.CalendarEntry || mongoose.model<ICalendarEntry>('CalendarEntry', CalendarEntrySchema);

export default CalendarEntry;
