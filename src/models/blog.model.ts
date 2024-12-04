import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IBlog extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  categories: string[];
  tags: string[];
  published: boolean;
  publishedAt?: Date;
}

const BlogSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Title is required'],
      minlength: [5, 'Title must be at least 5 characters long'],
      maxlength: [100, 'Title cannot exceed 100 characters'],
    },
    content: {
      type: String,
      required: [true, 'Content is required'],
      minlength: [20, 'Content must be at least 20 characters long'],
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'Author is required'],
    },
    categories: {
      type: [String],
      validate: {
        validator: function (categories: string[]) {
          return categories.length <= 5; // Limit to 5 categories
        },
        message: 'A blog can have up to 5 categories',
      },
    },
    tags: {
      type: [String],
      validate: {
        validator: function (tags: string[]) {
          return tags.length <= 10; // Limit to 10 tags
        },
        message: 'A blog can have up to 10 tags',
      },
    },
    published: {
      type: Boolean,
      default: false,
    },
    publishedAt: {
      type: Date,
      validate: {
        validator: function (value: Date) {
          // Ensure the publishedAt date is in the past or present
          return !value || value <= new Date();
        },
        message: 'Published date cannot be in the future',
      },
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
